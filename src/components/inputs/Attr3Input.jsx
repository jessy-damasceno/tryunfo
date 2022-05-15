import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr3Input extends Component {
  render() {
    const { value, onChange, name, remainingPoints } = this.props;

    return (
      <div className="container">
        <label htmlFor="attr3-input">
          Atributo - 03
          <input
            type="number"
            data-testid="attr3-input"
            name={ name }
            id="attr3-input"
            value={ value }
            onChange={ onChange }
          />
          <legend>
            {remainingPoints >= 0
              ? `Pontos de atributos restantes: ${remainingPoints}`
              : 'Excedeu número máximo de atributos (210 pts)'}
          </legend>
        </label>
      </div>
    );
  }
}

Attr3Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  remainingPoints: PropTypes.number.isRequired,
};
