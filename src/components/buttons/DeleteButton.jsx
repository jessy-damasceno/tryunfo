import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeleteButton extends Component {
  render() {
    const { onClick, cardName } = this.props;

    return (
      <button
        name={ cardName }
        data-testid="delete-button"
        type="button"
        id="delete-button"
        onClick={ onClick }
      >
        Excluir
      </button>
    );
  }
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};
