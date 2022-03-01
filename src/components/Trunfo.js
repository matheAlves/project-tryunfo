import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { isTrunfo } = this.props;
    if (isTrunfo) {
      return <h3 data-testid="trunfo-card">Super Trunfo</h3>;
    }
    return '';
  }
}
Trunfo.propTypes = {
  isTrunfo: PropTypes.bool.isRequired,
};
export default Trunfo;
