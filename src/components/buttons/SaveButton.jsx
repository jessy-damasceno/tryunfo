import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaveInput extends Component {
  render() {
    const { disabled, onChange } = this.props;

    return (
      <button
        data-testid="save-button"
        type="submit"
        id="save-button"
        disabled={ disabled }
        onChange={ onChange }
      >
        Salvar
      </button>
    );
  }
}

SaveInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
