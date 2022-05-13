import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr3Input extends Component {
  render() {
    const { value, onChange, name } = this.props;

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
        </label>
      </div>
    );
  }
}

Attr3Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
