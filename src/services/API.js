export const getLanguages = async () => {
  const response = await fetch('https://libretranslate.com/languages');
  const languages = await response.json();
  return response.ok ? Promise.resolve(languages) : Promise.reject(languages);
};

export const translateText = async (text, lang) => {
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
}
