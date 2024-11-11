import { useState, useEffect } from "react";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.netlify.com/api/v1/sites', {
          headers: {
            'Authorization': `Bearer nfp_6TQF4JcFQ3MTaRf6x8ytQXqxG3u9P9E95209`
          }
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

  return (
    <section className="grid p-8 bg-bgBody text-white">
      <div>
        <h2 className="mb-2 text-center font-Roboto text-3xl">Latest Works</h2>
        <p className="mb-10">Perfect solution for digital experience</p>
      </div>

      <div>
        {projects.map(project => {
          return (
          <div
            className="rounded-lg mb-10"
            key={project.id}
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
      </div>

      <a href="https://github.com/Yarce22?tab=repositories" className="text-Green font-bold">ALL PROJECTS</a>
    </section>
  );
};

export default Works;
