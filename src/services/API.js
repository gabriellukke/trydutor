import axios from 'axios';

export const getLanguages = async () => {
  try {
    const { data } = await axios.get('https://libretranslate.com/languages');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const translateText = async (text, lang) => {
  try {
    const { data } = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'pt',
      target: lang,
      format: 'text'
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

// https://libretranslate.de/ API Docs

/* export const translateText = async (text, lang) => {
  const apiOptions = {
    q: text,
    source: 'pt',
    target: lang,
    format: 'text',
  }
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(apiOptions),
    headers: { "Content-Type": "application/json" }
  }
  const response = await fetch('https://libretranslate.de/translate', fetchOptions);
  const translatedText = await response.json();
  return response.ok ? Promise.resolve(translatedText) : Promise.reject(translatedText);
} */
