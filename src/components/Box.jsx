import React, { useContext } from 'react';
import TranslateContext from '../context/TranslateContext';

const Box = () => {
  const { providerText } = useContext(TranslateContext);
  return <section>{providerText}</section>;
};

export default Box;
