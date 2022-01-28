import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLangsThunk, translateTextThunk } from '../redux/actions';

const Form = () => {
  const [translate, setTranslate] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const dispatch = useDispatch();
  const languages = useSelector(({ translateReducer }) => translateReducer.languages)

  useEffect(() => {
    dispatch(getLangsThunk());
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(translateTextThunk({ translate, selectedLanguage }));
  }

  return (
    <form>
      <label htmlFor="translate">
        Texto em PT-BR:
        <textarea
          id="translate"
          name="translate"
          value={translate}
          onChange={ ({ target }) => setTranslate(target.value)}
          rows={8}
          cols={40}
        />
      </label>
      <label htmlFor="selectedLanguage">
        Para:{' '}
        <select
          id="selectedLanguage"
          name="selectedLanguage"
          value={selectedLanguage}
          onChange={ ({ target }) => setSelectedLanguage(target.value)}
        >
          {languages.length && languages.map((language) => (
            <option key={ language.code } value={ language.code }>{language.name}</option>
          ))}
        </select>
      </label>
      <button type="submit" onClick={handleClick}>
        Traduzir
      </button>
    </form>
  );
}

export default Form;
