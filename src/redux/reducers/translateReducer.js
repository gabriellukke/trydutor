import { GET_LANGS, TRANSLATE_TEXT } from '../actions';

const INITIAL_STATE = {
  languages: [],
  translationInfos: {
    text: '',
    source: '',
    target: '',
    translation: '',
  },
};

const translateReducer = (state = INITIAL_STATE, action) => {
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
