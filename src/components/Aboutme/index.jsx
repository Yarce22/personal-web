import precise from "../../assets/icons8-objetivo-100.png"
import simple from "../../assets//icons8-idea-96.png"
import growth from "../../assets/icons8-crecimiento-competitivo-64.png"
import "./style.css"

const Aboutme = () => {
  return (
    <section className="body grid p-8 bg-bgBody text-white lg:py-32 lg:px-32 lg:gap-36" id="aboutme-section">
      <div>
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">Precise</h3>
            <p className="mt-1 md:text-2xl lg:text-xl">Create precise and efficient code</p>
          </div>

          <img src={precise} alt="icon-design" className="h-5 ml-5 md:h-8 lg:h-7" />
        </div>
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">Simple</h3>
            <p className="mb-5 md:text-2xl lg:text-xl">Create simple code that is easy to understand</p>
          </div>

          <img src={simple} alt="icon-design " className="h-6 ml-5 md:h-10 lg:h-7" />
        </div>
        <div className="flex justify-between p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">Growth</h3>
            <p className="mb-5 md:text-2xl lg:text-xl">I am always looking to grow and learn new skills</p>
          </div>

          <img src={growth} alt="icon-design" className="h-5 ml-5 md:h-8 lg:h-7" />
        </div>
      </div>

      <div className="flex flex-col justify-center mb-10 text-white">
        <h2 className="text-center text-2xl font-Roboto font-bold md:text-4xl">Hello! I'm Alejandro</h2>
        <p className="my-5 italic font-medium text-center md:text-xl">Every great web begin with an even better story</p>
        <p className="md:text-2xl">I started in the world of programming 1 year ago. Since then I have dreamed of becoming one of the most competent people. I am passionate about learning new skills and I have never been afraid of new challenges.</p>       
        </div>
    </section>
  )
}
export default Aboutme