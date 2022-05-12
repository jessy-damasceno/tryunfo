import React, { Component } from 'react';

export default class DescriptionInput extends Component {
  render() {
    return (
      <div className="container">
        Descrição
        <textarea
          data-testid="description-input"
          name="description-input"
          id="description-input"
        />
      </div>
    );
  }
}
