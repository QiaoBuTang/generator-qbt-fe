import React, { Component, PropTypes } from 'react';
import './notFountPage.scss';
import imageHello from '../../images/hello.gif';

export default class Hello extends Component {
  render() {
    return (
      <div>
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
