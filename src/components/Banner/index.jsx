import Header from "../Header"
import iconHtml from "../../assets/icons8-html.svg"
import iconCss from "../../assets/icons8-css.svg"
import iconJs from "../../assets/icons8-javascript.svg"
import iconReact from "../../assets/icons8-reaccionar.svg"
import iconRedux from "../../assets/icons8-redux.svg"
import fotoPerfil from "../../assets/foto-perfil.webp"

const Banner = () => {
  return (
    <section className="relative flex flex-col justify-between p-8 h-[75vh] text-white">
      <Header></Header>

      <div className="">
        <img src={fotoPerfil} alt="" className="absolute bottom-0 right-0 h-full w-full z-[-1]"/>
      </div>

      <div className="z-2">
        <p className="inline px-2 font-Kanit bg-Green rounded-md">Fronted-End Developer</p>
        <h2 className="my-5 font-Roboto text-3xl font-medium">I am Front-end Developer</h2>
        <p className="mb-10">Simple and precise code.</p>
        <a href="" className="text-Green font-semibold">LET'S CHAT!</a>
      </div>

      <div className="flex gap-3">
        <div className="w-7">
          <img src={iconHtml} alt="icon-html5" />
        </div>
        <div className="w-7">
          <img src={iconCss} alt="icon-css3" />
        </div>
        <div className="w-7">
        <img src={iconJs} alt="icon-JS" />
        </div>
        <div className="w-7">
        <img src={iconReact} alt="icon-React" />
        </div>
        <div className="w-7">
        <img src={iconRedux} alt="icon-Redux" />
        </div>
      </div>
    </section>
  )
}

export default Banner