import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const openHamburger = "absolute flex flex-col top-12 px-2 items-end w-full h-[60vh] bg-bgBanner md:h-[47.5vh]"
  const fontsBottomsHamburger = "m-2 font-semibold text-xl font-Kanit hover:text-Green hover:underline md:text-3xl lg:text-xl"

  const closeMenu = () => {
    setOpen(false)
  }

  const windowWidth = window.innerWidth

  const menuSize = () => {
    if (windowWidth < 768) {
      return 28
    } else if (windowWidth < 1024) {
      return 50
    } else if (windowWidth <= 1440) {
      return 180
    }
  }

  menuSize()

  return (
    <>
      <header className='relative flex justify-between items-center'>
        <div className='flex'>
          <p className='text-white font-Kanit text-xl md:text-4xl'><span className="font-bold">Alejandro</span> Mira</p>
        </div>

        <div className='p'></div>

        <div className={isOpen ? openHamburger : "hidden"}>
          <a href="#home" onClick={closeMenu} className={fontsBottomsHamburger}>Home</a>
          <a href="#aboutme-section" onClick={closeMenu} className={fontsBottomsHamburger}>About me</a>
          <a href="#works" onClick={closeMenu} className={fontsBottomsHamburger}>My projects</a>
          <a href="#contact" onClick={closeMenu} className={fontsBottomsHamburger}>Contact me</a>

          <hr className='w-full my-2' />

          <a href="https://github.com/Yarce22" className={fontsBottomsHamburger}>Github</a>
          <a href="https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/" className={fontsBottomsHamburger}>LinkedIn</a>
        </div>

        <div className={windowWidth >= 1024 ? "flex" : "hidden"}>
          <a href="#home" onClick={closeMenu} className={fontsBottomsHamburger}>Home</a>
          <a href="#aboutme-section" onClick={closeMenu} className={fontsBottomsHamburger}>About me</a>
          <a href="#works" onClick={closeMenu} className={fontsBottomsHamburger}>My projects</a>
          <a href="#contact" onClick={closeMenu} className={fontsBottomsHamburger}>Contact me</a>
        </div>

        <div className={windowWidth >= 1024 ? "hidden" : "block"}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={menuSize()} />
        </div>
      </header>
    </>
  )
}

export default Header 