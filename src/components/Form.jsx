import React from 'react';
import { connect } from 'react-redux';
import { getLangsThunk } from '../redux/actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      translate: '',
      selectedLanguage: '', 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getAllLangs } = this.props;
    getAllLangs();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const { translate, selectedLanguage } = this.state;
    const { languages } = this.props;
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
            {languages.length && languages.map((language) => (
              <option key={ language.code } value={ language.name }>{language.name}</option>
            ))}
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

const mapStateToProps = (state) => ({
  languages: state.translateReducer.languages,
});

const mapDispatchToProps = (dispatch) => ({
  getAllLangs: () => dispatch(getLangsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
