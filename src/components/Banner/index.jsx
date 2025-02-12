import { getLanguage } from '../../utils/functions';
import Header from "../Header"
import iconHtml from "../../assets/icons8-html.svg"
import iconCss from "../../assets/icons8-css.svg"
import iconJs from "../../assets/icons8-javascript.svg"
import iconReact from "../../assets/icons8-reaccionar.svg"
import iconRedux from "../../assets/icons8-redux.svg"
import fotoPerfil from "../../assets/foto-perfil.webp"


const windowWidth = window.innerWidth

const Banner = ({language, setLanguage}) => {
  return (
    <section className="relative flex flex-col justify-end p-8 h-[75vh] text-white md:h-[100lvh] lg:py-12 lg:px-32 lg:h-[75vh] lg:bg-banner-lg lg:bg-cover xl:h-[100vh]" id="home">
      <Header 
        language={language} 
        setLanguage={setLanguage}
      />
      <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center" data-aos="fade-right">
        <div className="flex flex-col justify-center z-2 mb-20 lg:ml-28">
          <h1 className="my-2 font-Roboto text-3xl font-medium text-Green md:text-4xl md:my-10">{getLanguage(language).hero.title}</h1>
          <h2 className="mb-5 text-2xl md:text-4xl">{getLanguage(language).hero.subtitle}</h2>
          <p className="mb-10 md:text-2xl">{getLanguage(language).hero.paragraph}</p>
          <a href="https://wa.me/573123119897" className="text-Green font-semibold md:text-2xl hover:underline">{getLanguage(language).hero.button}</a>
        </div>

        <div className={windowWidth >= 1024 ? "hidden" : ""}>
          <img src={fotoPerfil} alt="foto-perfil" className="absolute bottom-0 right-0 h-full w-full z-[-1] lg:w-auto lg:h-96 lg:z-0 lg:top-0 lg:left-0 lg:m-auto" data-aos="fade-left"/>
        </div>
      </div>

      <div className="flex gap-3" data-aos="fade-right">
        <div className="w-7 md:w-12">
          <img src={iconHtml} alt="icon-html5" />
        </div>
        <div className="w-7 md:w-12">
          <img src={iconCss} alt="icon-css3" />
        </div>
        <div className="w-7 md:w-12">
        <img src={iconJs} alt="icon-JS" />
        </div>
        <div className="w-7 md:w-12">
        <img src={iconReact} alt="icon-React" />
        </div>
        <div className="w-7 md:w-12">
        <img src={iconRedux} alt="icon-Redux" />
        </div>
      </div>
    </section>
  )
}

export default Banner