import React, { Component } from 'react';

export default class Attr3Input extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="attr3-input">
          Attr 03
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3-input"
            id="attr3-input"
          />
        </label>
      </div>
    );
  }
}
