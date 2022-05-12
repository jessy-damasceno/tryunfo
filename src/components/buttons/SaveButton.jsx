import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaveInput extends Component {
  render() {
    const { disabled, onClick } = this.props;

    return (
      <button
        data-testid="save-button"
        type="submit"
        id="save-button"
        disabled={ disabled }
        onClick={ onClick }
      >
        Salvar
      </button>
    );
  }
}

SaveInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
