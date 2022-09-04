import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './components/data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const sumLimit = 210;
    const maxAttr = 90;
    const minAttr = 0;

    if (
      cardName
      && cardDescription
      && cardImage
      && sum <= sumLimit
      && (cardAttr1 >= minAttr && cardAttr1 <= maxAttr)
      && (cardAttr2 >= minAttr && cardAttr2 <= maxAttr)
      && (cardAttr3 >= minAttr && cardAttr3 <= maxAttr)
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  // necessita melhorias
  hasTrunfo = () => {
    this.setState((prevState) => {
      const { cards } = prevState;
      if (cards.some((card) => card.cardTrunfo === true)) {
        this.setState({
          hasTrunfo: true,
        });
        return true;
      }
    });
  }

  handleSave = (props) => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = props;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [card, ...prevState.cards],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));

    this.hasTrunfo();
  }

  load = () => {
    this.setState({
      cards: data,
    });
    this.hasTrunfo();
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
    } = this.state;
    return (
      <article className="column">
        <section className="form-preview">
          <Form
            onInputChange={ this.handleChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleSave }
            hasTrunfo={ hasTrunfo }
            load={ this.load }
          />
          <div className="column">
            <h3>Pré Visualização</h3>
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
        </section>
        <div className="column">
          <h2>Todas as Cartas</h2>
          <div>
            {cards.map((card) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            ))}
          </div>
        </div>

      </article>
    );
  }
}

export default App;
