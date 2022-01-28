import React, { useState, useEffect } from 'react';
import { getLanguages, translateText } from '../services/API';
import TranslateContext from './TranslateContext';

const TranslateProvider = ({ children }) => {
  const [providerText, setProviderText] = useState('');
  const [dataLanguages, setDataLanguages] = useState([]);
  const [apiValues, setApiValues] = useState({
    text: '',
    language: ''
  });

  const getData = async () => {
    const languages = await getLanguages();
    setDataLanguages(languages);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const getTranslation = async () => {
      if (apiValues.text !== '') {
        const data = await translateText(apiValues.text, apiValues.language);

        setProviderText(data.translatedText);
      }
    };
    getTranslation();
  }, [apiValues]);

  const state = {
    providerText,
    setProviderText,
    dataLanguages,
    setApiValues
  };

  return (
    <TranslateContext.Provider value={state}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
