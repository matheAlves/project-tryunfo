import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trunfo from './Trunfo';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h3 data-testid="description-card">{cardDescription}</h3>
        <h1 data-testid="attr1-card">{cardAttr1}</h1>
        <h1 data-testid="attr2-card">{cardAttr2}</h1>
        <h1 data-testid="attr3-card">{cardAttr3}</h1>
        <h3 data-testid="rare-card">{cardRare}</h3>
        <Trunfo isTrunfo={ cardTrunfo } />
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.string.isRequired,
};

export default Card;
