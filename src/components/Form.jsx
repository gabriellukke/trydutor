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
    <form className="flex flex-col mb-5">
      <label htmlFor="translate" className="flex flex-col">
        <span className="mb-1 font-semibold">Texto em PT-BR:</span>
        <textarea
          id="translate"
          name="translate"
          value={text}
          onChange={({ target }) => setText(target.value)}
          rows={8}
          cols={40}
          className="rounded-lg"
        />
      </label>
      <div className="flex justify-between pt-4">
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
        <button
          type="submit" 
          onClick={handleClick}
          className="rounded-md bg-purple-500 p-2 mr-5 hover:bg-purple-700"
        >
          Traduzir
        </button>
      </div>
    </form>
  );
};

export default Form;
