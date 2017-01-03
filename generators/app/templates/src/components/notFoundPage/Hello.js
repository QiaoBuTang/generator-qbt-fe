import React, { Component, PropTypes } from 'react';
import './notFountPage.scss';
import imageHello from '../../images/hello.gif';
import MenuWrapper from '../menuWrapper/MenuWrapper';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <MenuWrapper hello="true" />
        <div className="qbt-notFound qbt-notFount_hello">
          <img src={imageHello} alt="" />;
        </div>
      </div>
    );
  }
}

Hello.propTypes = {
  type: PropTypes.string,
  params: PropTypes.object
};
