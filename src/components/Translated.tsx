import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Translated = () => {
  const text = useSelector(({ translateReducer } : RootState) => translateReducer.translationInfos.translation)
  return (
    <section>{text}</section>
  )
}

export default Translated;
