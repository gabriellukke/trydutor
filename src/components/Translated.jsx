import React from 'react';
import { useSelector } from 'react-redux';

const Translated = () => {
  const text = useSelector(({ translateReducer }) => translateReducer.translationInfos.translation)
  return (
    <section>{text}</section>
  )
}

export default Translated;
