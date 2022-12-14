import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterRare extends Component {
  render() {
    const { value, onChange, name, placeholder, disabled } = this.props;

    return (
      <select
        data-testid="rare-filter"
        name={ name }
        id="rare-filter"
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        disabled={ disabled }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

FilterRare.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
