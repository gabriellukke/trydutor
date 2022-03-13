import { GET_LANGS, TRANSLATE_TEXT } from '../actions';

export interface ActionType {
  type: keyof typeof GET_LANGS | keyof typeof TRANSLATE_TEXT;
  payload?: any;
}

const INITIAL_STATE = {
  languages: [],
  translationInfos: {
    text: '',
    source: '',
    target: '',
    translation: '',
  },
};

const translateReducer : object = (state = INITIAL_STATE, action : ActionType) => {
  switch (action.type) {
  case GET_LANGS:
    return {
      ...state,
      languages: [...action.payload],
    };
  case TRANSLATE_TEXT:
    return {
      ...state,
      translationInfos: action.payload,
    }
  default:
    return state;
  }
}

export default translateReducer;
