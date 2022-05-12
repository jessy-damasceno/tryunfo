import React, { Component } from 'react';

export default class TrunfoInput extends Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo-input"
            id="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
      </div>
    );
  }
}
