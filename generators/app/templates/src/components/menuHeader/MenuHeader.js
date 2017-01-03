import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {observer, inject} from 'mobx-react';
import {Row, Col} from 'antd';
import './menuHeader.scss';

@inject("menu")
@observer
export default class MenuHeader extends Component {
  render() {
    return (
      <Row className="admin-header" type="flex" align="middle">
        <Col span={4} className="admin-header__title_wrapper"><span className="admin-header__title">乔布简历后台</span></Col>
        <Col span={4} offset={16} className="admin-header__name">{this.props.menu.name}</Col>
      </Row>
    );
  }
}

MenuHeader.propTypes = {
  menu: PropTypes.object
};
