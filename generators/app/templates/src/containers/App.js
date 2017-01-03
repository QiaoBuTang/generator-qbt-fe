import React, {PropTypes, Component} from 'react';
import MenuHeader from '../components/menuHeader/MenuHeader';
import {Row, Col} from 'antd';
import {action} from 'mobx';
import menuActions from '../actions/menu';

export default class App extends Component {
  @action
  static onEnter({states, pathname, query, params}) {
    states.menu.pathname = pathname;
    return Promise.all([
      menuActions.fetchUsers(states)
    ]).then((res) => {
      res.map((fn) => {
        if (Object.prototype.toString.call(fn) === '[object Function]') {
          fn();
        }
      });
    });
  }

  render() {
    return (
      <div>
        <MenuHeader />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
