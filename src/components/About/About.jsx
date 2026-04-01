import "./About.scss";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__intro">
          <p className="about__eyebrow">À propos</p>
          <h2 className="section-title">
            Un profil front-end orienté clarté et qualité
          </h2>
        </div>

        <div className="about__content card">
          <p>
            Après ma formation en développement web, j’ai choisi de construire
            un profil orienté front-end avec React et JavaScript.
          </p>
          <p>
            J’aime concevoir des interfaces claires, dynamiques et responsive,
            en m’appuyant sur une base de code propre et structurée.
          </p>
          <p>
            À travers mes projets, j’ai développé des compétences en intégration
            front-end, création de composants réutilisables, consommation d’API
            et amélioration d’applications existantes.
          </p>
          <p>
            Aujourd’hui, je souhaite mettre ces compétences au service de
            projets concrets en freelance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
