import React, {PropTypes, Component} from 'react';
import MenuHeader from '../components/menuHeader/MenuHeader';
import {Row, Col} from 'antd';
import {action} from 'mobx';

export default class App extends Component {
  @action
  static onEnter({states, pathname, query, params}) {
    states.menu.pathname = pathname.startsWith('/') ? pathname.substring(1) : pathname; //因为客户端渲染和服务端渲染的pathname不同，会多一个/
  }

  render() {
    return (
      <div>
        <MenuHeader />
        <div className="admin-detail">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
