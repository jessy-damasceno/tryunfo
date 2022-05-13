import React, { Component } from 'react';
import PropTypes from 'prop-types';
import insertLink from '../../assets/insert_link.svg';

export default class ImageInput extends Component {
  render() {
    const { value, onChange, name } = this.props;

    return (
      <div className="container">
        <label htmlFor="image-input">
          Imagem
          <div id="div-image">
            <img id="insertLink" src={ insertLink } alt="" />
            <input
              type="text"
              data-testid="image-input"
              name={ name }
              value={ value }
              onChange={ onChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
