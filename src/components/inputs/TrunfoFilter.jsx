import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoFilter extends Component {
  render() {
    const { checked, onChange, name } = this.props;

    return (
      <label id="trunfo-filter-label" htmlFor="trunfo-filter">
        <input
          type="checkbox"
          data-testid="trunfo-filter"
          name={ name }
          id="trunfo-filter"
          checked={ checked }
          onChange={ onChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
