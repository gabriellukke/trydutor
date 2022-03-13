import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getLanguages, translateText } from '../../services/API';
import { AppDispatch, RootState } from '../store';

export const GET_LANGS = 'GET_LANGS';
export const GET_LANGS_FAIL = 'GET_LANGS';
export const TRANSLATE_TEXT = 'TRANSLATE_TEXT';

export const getLangs = (payload) => ({
  type: GET_LANGS,
  payload,
});

export const getLangsFail = () => ({
  type: GET_LANGS_FAIL,
});

export const translateTextAction = (payload) => ({
  type: TRANSLATE_TEXT,
  payload
});

export function getLangsThunk () {
  return async (dispatch) => {
  try {
    const languages = await getLanguages();
    console.log(languages)
    return dispatch(getLangs(languages));
  } catch (_error) {
    dispatch(getLangsFail());
  }
}
}


export const translateTextThunk = (userInfos) => async (dispatch : AppDispatch) => {
  try {
    const { translatedText } = await translateText(userInfos.translate, userInfos.selectedLanguage);
    const sendObject = {
      text: userInfos.translate,
      source: 'pt',
      target: userInfos.selectedLanguage,
      translation: translatedText,
    }
    return dispatch(translateTextAction(sendObject))
  } catch (error) {
    
  }
};