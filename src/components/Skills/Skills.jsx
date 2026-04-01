import "./Skills.scss";
import { skills } from "../../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="skills__eyebrow">Compétences</p>
        <h2 className="section-title">Technologies et outils</h2>

        <div className="skills__grid">
          <article className="skills__card card">
            <h3>Front-end</h3>
            <ul className="skills__list">
              {skills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="skills__card card">
            <h3>Outils</h3>
            <ul className="skills__list">
              {skills.tools.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="skills__card card">
            <h3>Architecture et données</h3>
            <ul className="skills__list">
              {skills.architecture.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
