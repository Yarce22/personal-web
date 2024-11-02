import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const openHamburger = "absolute flex flex-col top-12 items-end w-full h-[100vh] pr-2 bg-gray-900"
  const fontsBottomsHamburger = "m-2 font-semibold text-xl font-Kanit"

  return (
    <>
      <header className='relative flex justify-between items-center'>
        <div className='flex'>
          <p className='text-white font-Kanit text-xl'><span className="font-bold">Alejandro</span> Mira</p>
        </div>

        <div className='p'></div>

        <div className={isOpen ? openHamburger : "hidden"}>
          <a href="" className={fontsBottomsHamburger}>Home</a>
          <a href="" className={fontsBottomsHamburger}>About me</a>
          <a href="" className={fontsBottomsHamburger}>My projects</a>
          <a href="" className={fontsBottomsHamburger}>Contact me</a>

          <hr className='w-full my-2' />

          <a href="" className={fontsBottomsHamburger}>Github</a>
          <a href="" className={fontsBottomsHamburger}>LinkedIn</a>
        </div>

        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
        </div>
      </header>
    </>
  )
}

export default Header 