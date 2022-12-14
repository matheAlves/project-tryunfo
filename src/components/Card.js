import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrunfoCheck from './TrunfoCheck';

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
      <div className="column">
        <section className="card-preview column">
          <h1 data-testid="name-card">{cardName}</h1>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="preview-image"
          />
          <p data-testid="description-card">{cardDescription}</p>

          <h3 data-testid="attr1-card">
            {`HP: ${cardAttr1}`}
          </h3>
          <h3 data-testid="attr2-card">
            {`ATK: ${cardAttr2}`}
          </h3>
          <h3 data-testid="attr3-card">
            {`DEF: ${cardAttr3}`}
          </h3>

          <footer>
            <h4 data-testid="rare-card">{cardRare}</h4>
            <TrunfoCheck isTrunfo={ cardTrunfo } />
          </footer>
        </section>
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
