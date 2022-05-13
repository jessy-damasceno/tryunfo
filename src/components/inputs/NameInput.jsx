import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <div className="container">
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name={ name }
            id="name-input"
            value={ value }
            onChange={ onChange }
            // required
          />
        </label>
      </div>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
