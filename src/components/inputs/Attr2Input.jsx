import React, { Component } from 'react';

export default class Attr2Input extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="attr2-input">
          Attr 02
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2-input"
            id="attr2-input"
          />
        </label>
      </div>
    );
  }
}
