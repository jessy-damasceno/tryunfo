import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr1Input extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="container">
        <label htmlFor="attr1-input">
          Attr 01
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1-input"
            id="attr1-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Attr1Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
