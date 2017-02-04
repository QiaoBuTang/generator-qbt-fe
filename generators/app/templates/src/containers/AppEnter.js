import React, {PropTypes, Component} from 'react';
import {action} from 'mobx';
import menuActions from '../actions/menu';

export default class AppEnter extends Component {
  @action
  static onEnter({states, pathname, query, params}) {
    return Promise.all([
      menuActions.fetchUsers(states)
    ]).then((res) => {
      res.forEach((fn) => {
        if (Object.prototype.toString.call(fn) === '[object Function]') {
          fn();
        }
      });
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppEnter.propTypes = {
  children: PropTypes.element
};
