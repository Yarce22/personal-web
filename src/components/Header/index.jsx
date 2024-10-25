import icon from '../../assets/icon-developer.svg'

const Header = () => {
  return (
    <>
      <header className='flex'>
        <div className='flex'>
          <img src={icon} alt="icon-developer" className='w-5 mr-2'/>
          <p className='text-white'>Fronted Developer</p>
        </div>

        <div className='hidden'>
          <a href="">Home</a>
          <a href="">Resume</a>
          <a href="">My projects</a>
          <a href="">About me</a>
        </div>
      </header>
    </>
  )
}

export default Header 