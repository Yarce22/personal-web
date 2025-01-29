import { translations } from '../i18n/translate'

const getLanguage = (language) => {
  const languageEN = translations.en
  const languageES = translations.es
  if (language) {
    return languageES
  } else {
    return languageEN
  }
}

export { getLanguage }
