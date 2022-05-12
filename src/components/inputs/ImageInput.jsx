import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="container">
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
