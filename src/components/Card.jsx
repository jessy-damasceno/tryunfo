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
            <span data-testid="name-card">{cardName}</span>
          </div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <p data-testid="description-card">{cardDescription}</p>
        <div className="Card-atributes">
          <div className="atribute-1">
            <span>Attr01....................................</span>
            <span data-testid="attr1-card">{cardAttr1}</span>
          </div>
          <div className="atribute-2">
            <span>Attr02....................................</span>
            <span data-testid="attr2-card">{cardAttr2}</span>
          </div>
          <div className="atribute-3">
            <span>Attr03....................................</span>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </div>
        </div>
        <span data-testid="rare-card" id="rare-card-span">{cardRare}</span>
        <span
          data-testid="trunfo-card"
          id="trunfo-card-span"
        >
          {cardTrunfo === true && cardTrunfo}
        </span>
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
