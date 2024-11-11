import githubIcon from "../../assets/icons8-github.svg"
import linkedInIcon from "../../assets/icons8-linkedin.svg"

const ContactMe = () => {
  return (
    <section className="flex flex-col items-center p-8 bg-bgBanner text-white font-Roboto">
      <p className="mb-3">Let's make something amazing together.</p>
      <p className="mb-5">Start by <a href="" className="text-Green">saying hi</a></p>

      <hr className="h-1 w-full"/>

      <div className="flex gap-5 my-5">
        <a href="">Home</a>
        <a href="">About me</a>
        <a href="">My projects</a>
      </div>

      <div className="flex gap-5">
        <a href="https://github.com/Yarce22">
          <img src={githubIcon} alt="github-icon" className="h-10" />
        </a>
        <a href="https://www.linkedin.com/in/alejandro-mira-yarce-49789816b/">
          <img src={linkedInIcon} alt="linkedIn-icon" className="h-10" />
        </a>
      </div>
    </section>
  )
}

export default ContactMe