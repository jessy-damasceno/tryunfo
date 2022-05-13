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
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false, // start false, linha 41: !isSaveButtonDisabled >> botao disabled = true
  cardsDeck: [],
};

class App extends React.Component {
  state = INITIALSTATE;

  onInputChange = ({ target }) => {
    let { value } = target;
    const { type, name, checked } = target;
    value = type === 'checkbox' ? checked : value;

    this.setState({ [name]: value });

    this.setState(({ cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 }) => {
      const total = 210;
      const maxValue = 90;
      const minValue = 0;
      const atrValue1 = Number(cardAttr1);
      const atrValue2 = Number(cardAttr2);
      const atrValue3 = Number(cardAttr3);

      if (cardName.length >= 1
      && cardDescription.length >= 1
      && cardImage.length >= 1
      && cardRare.length >= 1
      && atrValue1 <= maxValue
      && atrValue2 <= maxValue
      && atrValue3 <= maxValue
      && atrValue1 >= minValue
      && atrValue2 >= minValue
      && atrValue3 >= minValue
      && (atrValue1 + atrValue2 + atrValue3 <= total)
      ) {
        return { isSaveButtonDisabled: true };
      }
      return { isSaveButtonDisabled: false };
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    }
    ));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div className="head-content">
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardTrunfo={ cardTrunfo }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
