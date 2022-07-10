import React, { useContext } from 'react';
import TranslateContext from '../context/TranslateContext';

const Box = () => {
  const { providerText } = useContext(TranslateContext);
  return (
    <section className="container max-w-sm flex flex-col items-start h-52 rounded-md mt-7 bg-white">
      <span className="p-2">
        {providerText}
      </span>
    </section>
  );
};

export default Box;
