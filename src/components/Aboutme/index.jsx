import precise from "../../assets/icons8-objetivo-100.png"
import simple from "../../assets//icons8-idea-96.png"
import growth from "../../assets/icons8-crecimiento-competitivo-64.png"
import "./style.css"

const Aboutme = () => {
  return (
    <section className="body grid p-8 bg-bgBody text-white">
      <div>
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green">Precise</h3>
            <p className="mt-1">Create precise and efficient code</p>
          </div>

          <img src={precise} alt="icon-design" className="h-5 ml-5" />
        </div>
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-2xl text-Green">Simple</h3>
            <p className="mb-5">Create simple code that is easy to understand</p>
          </div>

          <img src={simple} alt="icon-design" className="h-6 ml-5" />
        </div>
        <div className="flex justify-between p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green">Growth</h3>
            <p className="mb-5">I am always looking to grow and learn new skills</p>
          </div>

          <img src={growth} alt="icon-design" className="h-5 ml-5" />
        </div>
      </div>

      <div className="flex flex-col mb-5 text-white">
        <h2 className="text-2xl font-Roboto font-bold">Hello! I'm Alejandro</h2>
        <p className="my-5 italic font-medium">Every great web begin with an even better story</p>
        <p>I started in the world of programming 1 year ago. Since then I have dreamed of becoming one of the most competent people. I am passionate about learning new skills and I have never been afraid of new challenges.</p>       
        </div>
    </section>
  )
}
export default Aboutme