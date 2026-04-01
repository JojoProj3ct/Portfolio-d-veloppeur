import kasaImage from "../assets/images/kasa.jpg";
import sophieImage from "../assets/images/sophie-bluel.jpg";
import agenceImage from "../assets/images/agence-evenementielle.jpg";
import bankImage from "../assets/images/application-bancaire.jpg";

export const projects = [
  {
    id: 1,
    title: "Kasa",
    stack: ["React", "React Router", "Sass"],
    icons: [
      { name: "React", icon: "FaReact", color: "#61DAFB" },
      { name: "React Router", icon: "TbRoute", color: "#CA4245" },
      { name: "Sass", icon: "FaSass", color: "#CC6699" },
    ],
    description:
      "Application de location immobilière développée en React avec navigation multipage, composants réutilisables et interface responsive.",
    github: "https://github.com/JojoProj3ct/kasa",
    demo: "",
    image: kasaImage,
    alt: "Capture du projet Kasa",
  },
  {
    id: 2,
    title: "Sophie Bluel",
    stack: ["JavaScript", "HTML", "CSS", "API REST"],
    icons: [
      { name: "JavaScript", icon: "IoLogoJavascript", color: "#F7DF1E" },
      { name: "HTML", icon: "FaHtml5", color: "#E34F26" },
      { name: "CSS", icon: "FaCss3Alt", color: "#1572B6" },
      { name: "API REST", icon: "MdApi", color: "#38BDF8" },
    ],
    description:
      "Site vitrine dynamique connecté à une API, avec interface d’administration, authentification et gestion de contenus.",
    github: "https://github.com/JojoProj3ct/Projet6-sophie-bluel",
    demo: "",
    image: sophieImage,
    alt: "Capture du projet Sophie Bluel",
  },
  {
    id: 3,
    title: "Agence événementielle",
    stack: ["JavaScript", "React", "Debug", "Tests"],
    icons: [
      { name: "JavaScript", icon: "IoLogoJavascript", color: "#F7DF1E" },
      { name: "React", icon: "FaReact", color: "#61DAFB" },
      { name: "Tests", icon: "TbTestPipe", color: "#A78BFA" },
      { name: "Debug", icon: "MdBugReport", color: "#F97316" },
    ],
    description:
      "Débogage et fiabilisation d’un site one-page existant avec analyse des anomalies et rédaction d’un cahier de recette.",
    github: "https://github.com/JojoProj3ct/Debuggez-une-appli-projet-9",
    demo: "",
    image: agenceImage,
    alt: "Capture du projet Agence événementielle",
  },
  {
    id: 4,
    title: "Application bancaire",
    stack: ["React", "Redux", "API REST", "Swagger"],
    icons: [
      { name: "React", icon: "FaReact", color: "#61DAFB" },
      { name: "Redux", icon: "SiRedux", color: "#764ABC" },
      { name: "API REST", icon: "MdApi", color: "#38BDF8" },
      { name: "Swagger", icon: "SiSwagger", color: "#85EA2D" },
    ],
    description:
      "Front-end bancaire développé avec React et Redux, connecté à une API pour afficher les données utilisateur dans un tableau de bord.",
    github: "https://github.com/JojoProj3ct/Argentbank-front-end",
    demo: "",
    image: bankImage,
    alt: "Capture du projet Application bancaire",
  },
];
