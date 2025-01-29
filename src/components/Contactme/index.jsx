import { getLanguage } from '../../utils/functions';
import githubIcon from "../../assets/icons8-github.svg"
import linkedInIcon from "../../assets/icons8-linkedin.svg"

const ContactMe = ({ language }) => {
  return (
    <section className="flex flex-col items-center p-8 bg-bgBanner text-white font-Roboto lg:py-32 lg:px-32" id="contact">
      <p className="mb-3 font-bold text-Green md:text-2xl">{getLanguage(language).contact.title}</p>
      <p className="mb-3 text-center md:text-2xl">{getLanguage(language).contact.subtitle}</p>

      <hr className="h-1 w-full"/>

      <div className="flex gap-5 my-5 md:text-2xl">
        <a href="#home" className="hover:text-Green hover:underline">{getLanguage(language).nav.home}</a>
        <a href="#aboutme-section" className="hover:text-Green hover:underline">{getLanguage(language).nav.about}</a>
        <a href="#works" className="hover:text-Green hover:underline">{getLanguage(language).nav.projects}</a>
      </div>

      <div className="flex gap-5">
        <a href="https://github.com/Yarce22">
          <img src={githubIcon} alt="github-icon" className="h-10 md:h-16" />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/">
          <img src={linkedInIcon} alt="linkedIn-icon" className="h-10 md:h-16" />
        </a>
      </div>
    </section>
  )
}

export default ContactMe