import {action, toJS} from 'mobx';
import fetch from 'isomorphic-fetch';
import {CV_SERVER} from '../../config.json';
import {redirect, login} from '../helpers/location';

export default {
  @action fetchUsers: function(states) {
    let _this = this;
    return new Promise((resolve)=> {
      let obj = {
        credentials: 'include'
      };
      if (states.cookie) {
        obj['headers'] = {Cookie: states.cookie};
      }
      fetch(`${CV_SERVER}/account/current.json`, obj).then(res => {
        return res.json();
      }).then(function(data) {
        if (data.needLogin) {
          resolve(login);
        } else {
          states.menu.name = data.name;
          states.menu.access = data.access;
          //处理权限验证
          _this.handleAccess(states.menu.access, states.menu.pathname, resolve);
        }

        resolve();
      });
    });
  },

  handleAccess: function(access, pathname, resolve) {
    let accessJS = toJS(access);
    if (pathname.includes('pmatch/')) {
      //精准匹配
      if (!accessJS.includes(24)) {
        resolve(() => {
          redirect('//cv.qiaobutang.com');
        });
      }
    }
  }
};
