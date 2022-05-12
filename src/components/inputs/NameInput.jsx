import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="container">
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name-input"
            id="name-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
