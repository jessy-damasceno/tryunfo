import React, { Component } from 'react';

export default class RareInput extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="rare-input">
          Raridade
          <select
            type="text"
            data-testid="rare-input"
            name="rare-input"
            id="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}
