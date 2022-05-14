import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="Card">
        <div className="Card-title">
          <div className="Card-title-text">
            <h3 data-testid="name-card">{cardName}</h3>
          </div>
          <div id="image">
            <img
              id="image-card"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
        </div>
        <div id="description">
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="Card-atributes">
          <div className="atribute">
            <span>Attr01....................................</span>
            <span data-testid="attr1-card">{cardAttr1}</span>
          </div>
          <div className="atribute">
            <span>Attr02....................................</span>
            <span data-testid="attr2-card">{cardAttr2}</span>
          </div>
          <div className="atribute">
            <span>Attr03....................................</span>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </div>
        </div>
        <span data-testid="rare-card" id="rare-card-span">{cardRare}</span>

        {cardTrunfo && (
          <span
            data-testid="trunfo-card"
            id="trunfo-card-span"
          >
            Super Trunfo
          </span>
        )}
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
};
