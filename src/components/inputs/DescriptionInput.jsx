import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { value, onChange, name } = this.props;

    return (
      <div className="container">
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            name={ name }
            id="description-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
