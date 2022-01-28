import React, { useState, useContext } from 'react';
import TranslateContext from '../context/TranslateContext';

const Form = () => {
  // const [stateForm, setStateForm] = useState({});

  const { setApiValues, dataLanguages } = useContext(TranslateContext);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');

  const handleClick = (e) => {
    e.preventDefault();
    setApiValues({ text, language });
  };

  return (
    <form>
      <label htmlFor="translate">
        Texto em PT-BR:
        <textarea
          id="translate"
          name="translate"
          value={text}
          onChange={({ target }) => setText(target.value)}
          rows={8}
          cols={40}
        />
      </label>
      <label htmlFor="selectedLanguage">
        Para:{' '}
        <select
          id="selectedLanguage"
          name="selectedLanguage"
          value={language}
          onChange={({ target }) => setLanguage(target.value)}
        >
          {dataLanguages.length &&
            dataLanguages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
        </select>
      </label>
      <button type="submit" onClick={handleClick}>
        Traduzir
      </button>
    </form>
  );
};

export default Form;
