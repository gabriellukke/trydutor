import { getLanguages } from '../../services/API';

export const GET_LANGS = 'GET_LANGS';
export const GET_LANGS_FAIL = 'GET_LANGS';

export const getLangs = (payload) => ({
  type: GET_LANGS,
  payload,
});

export const getLangsFail = () => ({
  type: GET_LANGS_FAIL,
});

export const getLangsThunk = () => async (dispatch) => {
  try {
    const languages = await getLanguages();
    console.log(languages)
    return dispatch(getLangs(languages));
  } catch (_error) {
    dispatch(getLangsFail());
  }
}
