import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr2Input extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="container">
        <label htmlFor="attr2-input">
          Attr 02
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2-input"
            id="attr2-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Attr2Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
