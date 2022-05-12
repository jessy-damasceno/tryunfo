import React, { Component } from 'react';

export default class Attr1Input extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="attr1-input">
          Attr 01
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1-input"
            id="attr1-input"
          />
        </label>
      </div>
    );
  }
}
