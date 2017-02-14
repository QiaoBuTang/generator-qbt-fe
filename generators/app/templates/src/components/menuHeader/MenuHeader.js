import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {observer, inject} from 'mobx-react';
import {Row, Col} from 'antd';
import './menuHeader.scss';

@inject("menu")
@observer
export default class MenuHeader extends Component {
  render() {
    if (this.props.menu.pathname || this.props.hello) {
      return (
        <Row className="admin-header" type="flex" align="middle">
          <Col span={4} className="admin-header__title_wrapper"><span className="admin-header__title">乔布简历</span></Col>
          <Col span={4} offset={16} className="admin-header__name">{this.props.menu.name}</Col>
        </Row>
      );
    } else {
      return null;
    }
  }
}

MenuHeader.propTypes = {
  menu: PropTypes.object,
  hello: PropTypes.string
};
