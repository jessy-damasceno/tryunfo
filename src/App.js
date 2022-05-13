import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIALSTATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

class App extends React.Component {
  state = INITIALSTATE;

  onInputChange = ({ target }) => {
    let { value } = target;
    const { type, name, checked } = target;
    value = type === 'checkbox' ? checked : value;

    this.setState({ [name]: value });
    console.log(name, ':', value);
  }
  // onSaveButtonClick

  render() {
    const { cardName, cardTrunfo } = this.state;
    return (
      <div className="head-content">
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardName={ cardName }
        />
      </div>
    );
  }
}

export default App;
