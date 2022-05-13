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

    console.log(hasTrunfo);

    return (
      <form>
        <h1>Adicionar nova carta</h1>
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
        <TrunfoInput
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
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
