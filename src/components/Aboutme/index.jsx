import { getLanguage } from '../../utils/functions';
import precise from "../../assets/icons8-objetivo-100.png"
import simple from "../../assets//icons8-idea-96.png"
import growth from "../../assets/icons8-crecimiento-competitivo-64.png"
import "./style.css"

const Aboutme = ({ language }) => {
  return (
    <section className="body grid p-8 bg-bgBody text-white lg:py-32 lg:px-32 lg:gap-36" id="aboutme-section">
      <div data-aos="fade-right">
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">{getLanguage(language).about.skills[0].title}</h3>
            <p className="mt-1 md:text-2xl lg:text-xl">{getLanguage(language).about.skills[0].description}</p>
          </div>

          <img src={precise} alt="icon-design" className="h-5 ml-5 md:h-8 lg:h-7" />
        </div>
        <div className="flex justify-between mb-2 p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">{getLanguage(language).about.skills[1].title}</h3>
            <p className="mb-5 md:text-2xl lg:text-xl">{getLanguage(language).about.skills[1].description}</p>
          </div>

          <img src={simple} alt="icon-design " className="h-6 ml-5 md:h-10 lg:h-7" />
        </div>
        <div className="flex justify-between p-5 bg-bgBanner rounded-md">
          <div>
            <h3 className="text-xl text-Green md:text-3xl lg:text-2xl">{getLanguage(language).about.skills[2].title}</h3>
            <p className="mb-5 md:text-2xl lg:text-xl">{getLanguage(language).about.skills[2].description}</p>
          </div>

          <img src={growth} alt="icon-design" className="h-5 ml-5 md:h-8 lg:h-7" />
        </div>
      </div>

      <div className="flex flex-col justify-center mb-10 text-white" data-aos="fade-left">
        <h2 className="text-center text-Green text-2xl font-Roboto font-bold md:text-4xl">{getLanguage(language).about.title}</h2>
        <p className="my-5 md:text-xl">{getLanguage(language).about.description1}</p>
        <p className="md:text-xl">{getLanguage(language).about.description2}</p>       
        </div>
    </section>
  )
}
export default Aboutme