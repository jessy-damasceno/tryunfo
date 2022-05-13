import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoInput extends Component {
  render() {
    const { checked, onChange, name } = this.props;

    return (
      <div className="container">
        <label id="trunfo-input-label" htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name={ name }
            id="trunfo-input"
            checked={ checked }
            onChange={ onChange }
          />
          Super Trybe Trunfo
        </label>
      </div>
    );
  }
}

TrunfoInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
