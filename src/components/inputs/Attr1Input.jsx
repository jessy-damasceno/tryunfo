import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr1Input extends Component {
  render() {
    const { value, onChange, name } = this.props;
    const max = 90;
    const min = 0;
    const isValidAttribute = Boolean(value > max || value < min);

    return (
      <div className="container">
        <label htmlFor="attr1-input">
          Atributo - 01
          <input
            type="number"
            data-testid="attr1-input"
            name={ name }
            id="attr1-input"
            value={ value }
            onChange={ onChange }
          />
          <legend>
            {isValidAttribute && 'Valor de atributo inválido'}
          </legend>
        </label>
      </div>
    );
  }
}

Attr1Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
