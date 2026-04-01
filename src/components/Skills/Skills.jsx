import "./Skills.scss";
import { skills } from "../../data/skillsData";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
  FaYarn,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite, SiRedux, SiSwagger } from "react-icons/si";
import { TbRoute } from "react-icons/tb";
import { MdApi } from "react-icons/md";
import { VscJson } from "react-icons/vsc";

const iconMap = {
  FaReact,
  IoLogoJavascript,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  SiVite,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaYarn,
  TbRoute,
  SiRedux,
  MdApi,
  VscJson,
  SiSwagger,
};

function SkillItem({ skill }) {
  const Icon = iconMap[skill.icon];

  return (
    <li className="skills__item">
      <span
        className="skills__icon"
        aria-hidden="true"
        style={{ color: skill.color }}
      >
        {Icon && <Icon />}
      </span>
      <span>{skill.name}</span>
    </li>
  );
}

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
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </article>

          <article className="skills__card card">
            <h3>Outils</h3>
            <ul className="skills__list">
              {skills.tools.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </article>

          <article className="skills__card card">
            <h3>Architecture et données</h3>
            <ul className="skills__list">
              {skills.architecture.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
