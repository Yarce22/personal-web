import Header from "../Header"
import iconHtml from "../../assets/icons8-html.svg"
import iconCss from "../../assets/icons8-css.svg"
import iconJs from "../../assets/icons8-javascript.svg"
import iconReact from "../../assets/icons8-reaccionar.svg"
import iconRedux from "../../assets/icons8-redux.svg"
import fotoPerfil from "../../assets/foto-perfil.webp"


const windowWidth = window.innerWidth

const Banner = () => {
  return (
    <section className="relative flex flex-col justify-between p-8 h-[75vh] text-white md:h-[55vh] lg:py-12 lg:px-32 lg:h-[75vh] lg:bg-banner-lg lg:bg-cover xl:h-[100vh]" id="home">
      <Header></Header>

      <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
        <div className="z-2 lg:ml-28">
          <p className="inline px-2 font-Kanit bg-Green rounded-md md:text-2xl lg:text-xl">Fronted-End Developer</p>
          <h2 className="my-5 font-Roboto text-3xl font-medium md:text-4xl md:my-10">I am Front-end Developer</h2>
          <p className="mb-10 md:text-2xl">Simple and precise code.</p>
          <a href="https://wa.me/573123119897" className="text-Green font-semibold md:text-2xl hover:underline">LET'S CHAT!</a>
        </div>

        <div className={windowWidth >= 1024 ? "hidden" : ""}>
          <img src={fotoPerfil} alt="foto-perfil" className="absolute bottom-0 right-0 h-full w-full z-[-1] lg:w-auto lg:h-96 lg:z-0 lg:top-0 lg:left-0 lg:m-auto"/>
        </div>
      </div>

      <div className="flex gap-3">
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