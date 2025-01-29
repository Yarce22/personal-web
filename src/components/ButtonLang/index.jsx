const ButtonLang = ({ setLanguage, language }) => {
  const toggleLanguage = () => {
    setLanguage(!language)
  }

  return(
    <button className='w-12' onClick={toggleLanguage}>
      <img src={
        language
        ? 'https://img.icons8.com/?size=100&id=17967&format=png&color=000000'
        : 'https://img.icons8.com/?size=100&id=15534&format=png&color=000000'
        }
        alt="icon-language" />
    </button>
  )
}

export { ButtonLang }
