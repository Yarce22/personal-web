import Header from "../Header"
import iconHtml from "../../assets/icons8-html.svg"
import iconCss from "../../assets/icons8-css.svg"
import iconJs from "../../assets/icons8-javascript.svg"
import iconReact from "../../assets/icons8-reaccionar.svg"
import iconRedux from "../../assets/icons8-redux.svg"

const Banner = () => {
  return (
    <section className="flex flex-col justify-between px-5 py-3 bg-black h-[50vh] text-white">
      <Header></Header>

      <div>
        <p className="font-Kanit">Hi there,</p>
        <h1 className="font-Kanit text-3xl font-bold">I am Front-end Developer</h1>
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