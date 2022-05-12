import React, { Component } from 'react';

export default class NameInput extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name-input"
            id="name-input"
          />
        </label>
      </div>
    );
  }
}
