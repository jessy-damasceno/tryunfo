import React, { Component } from 'react';

export default class ImageInput extends Component {
  render() {
    return (
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
    );
  }
}
