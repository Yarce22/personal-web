import icon from '../../assets/icon-developer.svg'

const Header = () => {
  return (
    <>
      <header className='flex'>
        <div className='flex'>
          <img src={icon} alt="icon-developer" className='w-8 mr-2'/>
          <p className='text-white font-Roboto text-xl'>Fronted Developer</p>
        </div>

        <div className='hidden'>
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">My projects</a>
          <a href="">Contact me</a>
        </div>
      </header>
    </>
  )
}

export default Header 