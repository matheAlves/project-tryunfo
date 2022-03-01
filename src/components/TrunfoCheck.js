import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoCheck extends Component {
  render() {
    const { isTrunfo } = this.props;
    if (isTrunfo) {
      return <h4 data-testid="trunfo-card" onC>Super Trunfo</h4>;
    }
    return '';
  }
}
TrunfoCheck.propTypes = {
  isTrunfo: PropTypes.bool.isRequired,
};
export default TrunfoCheck;
