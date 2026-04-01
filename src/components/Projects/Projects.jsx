import "./Projects.scss";
import { projects } from "../../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="projects__eyebrow">Projets</p>
        <h2 className="section-title">Une sélection de réalisations</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__card card">
              <div className="projects__content">
                <h3>{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                <ul className="projects__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="projects__links">
                  <a href={project.github} className="button button--secondary">
                    GitHub
                  </a>
                  <a href={project.demo} className="button button--primary">
                    Démo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
