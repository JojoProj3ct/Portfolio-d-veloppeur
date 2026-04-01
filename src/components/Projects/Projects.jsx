import "./Projects.scss";
import { projects } from "../../data/projectsData";
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbRoute, TbTestPipe } from "react-icons/tb";
import { MdApi, MdBugReport } from "react-icons/md";
import { SiRedux, SiSwagger } from "react-icons/si";

const iconMap = {
  FaReact,
  IoLogoJavascript,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  TbRoute,
  MdApi,
  TbTestPipe,
  MdBugReport,
  SiRedux,
  SiSwagger,
};

function ProjectTechIcon({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <li className="projects__tech-item" title={item.name}>
      <span
        className="projects__tech-icon"
        style={{ color: item.color }}
        aria-hidden="true"
      >
        {Icon && <Icon />}
      </span>
    </li>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="projects__eyebrow">Projets</p>
        <h2 className="section-title">Une sélection de réalisations</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__card card">
              {project.image && (
                <a
                  href={project.demo || project.github || "#"}
                  className="projects__image-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="projects__image"
                  />
                </a>
              )}

              <div className="projects__content">
                <h3>
                  <a
                    href={project.demo || project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="projects__description">{project.description}</p>

                {project.icons && (
                  <ul className="projects__tech-list">
                    {project.icons.map((item) => (
                      <ProjectTechIcon key={item.name} item={item} />
                    ))}
                  </ul>
                )}

                <ul className="projects__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="projects__links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="button button--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="button button--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démo
                    </a>
                  )}
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
