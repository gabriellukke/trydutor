export const getLanguages = async () => {
  const response = await fetch('https://libretranslate.com/languages');
  const languages = await response.json();
  return response.ok ? Promise.resolve(languages) : Promise.reject(languages);
};
