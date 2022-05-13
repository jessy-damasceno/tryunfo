import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterName extends Component {
  render() {
    const { type, value, onChange, name, placeholder } = this.props;
    return (
      <input
        type={ type }
        data-testid="name-filter"
        name={ name }
        id="name-filter"
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    );
  }
}

FilterName.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
