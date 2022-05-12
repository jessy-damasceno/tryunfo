import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="container">
        Descrição
        <textarea
          data-testid="description-input"
          name="description-input"
          id="description-input"
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

DescriptionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
