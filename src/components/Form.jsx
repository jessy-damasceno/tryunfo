import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameInput from './inputs/NameInput';
import DescriptionInput from './inputs/DescriptionInput';
import Attr1Input from './inputs/Attr1Input';
import Attr2Input from './inputs/Attr2Input';
import Attr3Input from './inputs/Attr3Input';
import ImageInput from './inputs/ImageInput';
import RareInput from './inputs/RareInput';
import TrunfoInput from './inputs/TrunfoInput';
import SaveButton from './buttons/SaveButton';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    const totalPoints = 210;
    const remainingPoints = totalPoints
      - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));

    return (
      <form>
        <NameInput
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <DescriptionInput
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="atributes">
          <Attr1Input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Attr2Input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <Attr3Input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            remainingPoints={ remainingPoints }
          />
        </div>
        <ImageInput
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <RareInput
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        {!hasTrunfo ? (
          <TrunfoInput
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        ) : (
          <div id="has_trunfo">
            <span>Você já tem um Super Trunfo em seu baralho</span>
          </div>
        )}

        <SaveButton
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
