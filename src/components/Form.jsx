import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      translate: '',
      selectedLanguage: '', 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const { translate, selectedLanguage, languages } = this.state;
    return (
      <form>
        <label htmlFor="translate">
          Traduzir:
          <textarea
            id="translate"
            name="translate"
            value={translate}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="selectedLanguage">
          Para:
          <select
            id="selectedLanguage"
            name="selectedLanguage"
            value={selectedLanguage}
            onChange={this.handleChange}
          >
            {/* languages.length && languages.map((language) => (
              <option key={ language } value={ language }>{language}</option>
            )) */}
          </select>
        </label>
        <button
          type="submit"
          onClick={this.handleClick}
        >
          Traduzir
        </button>
      </form>
    )
  }
}

export default Form;
