import './App.css'
import Banner from './components/Banner'
import Aboutme from './components/Aboutme'
import Works from './components/Works'
import ContactMe from './components/Contactme'
import { useState } from 'react'

const App = () => {

  const [language, setLanguage] = useState(false)

  return (
    <>
      <Banner 
        language={language} 
        setLanguage={setLanguage} 
      />
      <Aboutme />
      <Works />
      <ContactMe />
    </>
  )
}

export default App
