import Header from "../Header"
import iconHtml from "../../assets/icons8-html.svg"
import iconCss from "../../assets/icons8-css.svg"
import iconJs from "../../assets/icons8-javascript.svg"
import iconReact from "../../assets/icons8-reaccionar.svg"
import iconRedux from "../../assets/icons8-redux.svg"

const Banner = () => {
  return (
    <section className="flex flex-col justify-between p-8 bg-bgBanner h-[75vh] text-white">
      <Header></Header>

      <div>
        <p className="inline px-2 font-Kanit bg-Green rounded-md">Fronted-End Developer</p>
        <h2 className="mt-5 font-Roboto text-3xl font-medium">I am Front-end Developer</h2>
        <p></p>
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