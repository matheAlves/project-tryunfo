import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="card-name">
          Nome
          <input
            id="card-name"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="card-description">
          Descrição
          <input
            id="card-description"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            id="image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select id="raridade" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          className="salvar-btn"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
