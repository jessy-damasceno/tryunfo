import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RareInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="container">
        <label htmlFor="rare-input">
          Raridade
          <select
            type="text"
            data-testid="rare-input"
            name="rare-input"
            id="rare-input"
            value={ value }
            onChange={ onChange }
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

RareInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
