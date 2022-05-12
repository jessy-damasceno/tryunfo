import React, { Component } from 'react';

export default class SaveInput extends Component {
  render() {
    return (
      <button
        data-testid="save-button"
        type="submit"
        id="save-button"
      >
        Salvar
      </button>
    );
  }
}
