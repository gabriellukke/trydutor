import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch, RootStateOrAny } from 'react-redux';
import { getLangsThunk, translateTextThunk } from '../redux/actions';
import type { DispatchFunctionType} from '../redux/store';

interface LanguageTypes {
  code: React.Key;
  name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}

const Form: React.FC = () => {
  const [translate, setTranslate] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const dispatch = useDispatch<DispatchFunctionType>();
  const languages = useSelector(({ translateReducer } : RootStateOrAny) => translateReducer.languages)

  useEffect(() => {
    dispatch(getLangsThunk());
  }, [dispatch])
 
  /* const handleChange = ({ target: { name, value } }) => {
    const obj = {
      translate: () => setTranslate(value),
      selectedLanguage: () => setSelectedLanguage(value)
    }
    return obj[name]();
  } */

   /****
   * For some reason, the setter of useState hook
   * doesn't work as a function in the object key.
   * I had to use it as a callback in the object key
   ****/
  const handleChange = ({ target: { name, value } }) => ({
    translate: setTranslate,
    selectedLanguage: setSelectedLanguage
  })[name](value)

  const handleClick = (e: { preventDefault: () => void; }) : void => {
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
          onChange={handleChange}
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
          onChange={handleChange}
        >
          {languages.length && languages.map((language : LanguageTypes) => (
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
