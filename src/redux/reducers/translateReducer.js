import { GET_LANGS } from '../actions';

const INITIAL_STATE = {
  languages: [],
  translation: {
    text: '',
    source: '',
    target: '',
    translation: '',
  },
};

const translateReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
  case GET_LANGS:
    return {
      ...state,
      languages: [...action.payload],
    };
  default:
    return state;
  }
}

export default translateReducer;
