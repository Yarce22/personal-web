import { useState, useEffect } from "react";
import { getLanguage } from '../../utils/functions';
import "./style.css"

const Works = ({language}) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.netlify.com/api/v1/sites', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer nfp_qLXyDSQRapGkEQ1hyrpYigTK7QgtFSSMf158`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        const latestProjects = data.slice(0, 3);

        setProjects(latestProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
      }
    };

    fetchProjects();
  }, []);

  let projectCard = 0

  return (
    <section className="works grid p-8 bg-bgBody text-white lg:gap-5 lg:py-32 lg:px-32 lg:grid-cols-2" id="works">
      <div className="title" data-aos="fade-down">
        <h2 className="mb-2 text-Green text-center font-Roboto text-3xl font-bold md:text-3xl">{getLanguage(language).projects.title}</h2>
        <p className="mb-10 text-center md:text-lg">{getLanguage(language).projects.subtitle}</p>
      </div>

      {projects.map(project => {
        projectCard++

        return (
        <div
          className={"card" + projectCard + " flex flex-col items-center rounded-lg mb-10"}
          key={project.id}
          data-aos="fade-up"
        >
          <a href={project.url}>
            <img
              src={project.published_deploy.screenshot_url}
              alt={project.name}
              className="rounded-lg"
            />
          </a>
        </div>
      )})}
      <div className="flex flex-col justify-center items-center h-full">
        <a href="https://github.com/Yarce22?tab=repositories" className="link-projects text-Green font-bold text-center md:text-2xl hover:underline">{getLanguage(language).projects.viewAll}</a>
        <p className="mt-5">{getLanguage(language).projects.viewAllText}</p>
      </div>
    </section>
  );
};

export default Works;
