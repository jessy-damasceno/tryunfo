import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class InputForm extends Component {
  render() {
    const {
      value,
      onChange: onInputChange,
      onClick: onSaveButtonClick,
      checked: cardTrunfo,
      disabled: isSaveButtonDisabled
    } = this.props;
    return (
      <>
        <div className="container">
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name-input"
              id="name-input"
            />
          </label>
        </div>
        <div className="container">
          Descrição
          <textarea
            data-testid="description-input"
            name="description-input"
            id="description-input"
          />
        </div>
        <div className="container">
          <label htmlFor="attr1-input">
            Attr 01
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1-input"
              id="attr1-input"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="attr2-input">
            Attr 02
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2-input"
              id="attr2-input"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="attr3-input">
            Attr 03
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3-input"
              id="attr3-input"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="rare-input">
            Raridade
            <select
              type="text"
              data-testid="rare-input"
              name="rare-input"
              id="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
              id="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
        </div>
        <button
          data-testid="save-button"
          type="submit"
          id="save-button"
        >
          Salvar
        </button>
      </>
    );
  }
}

InputForm.propTypes = {
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
