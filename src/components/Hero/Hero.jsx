import "./Hero.scss";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <p className="hero__eyebrow">Portfolio freelance</p>

        <h1 className="hero__title">Développeur front-end React freelance</h1>

        <p className="hero__text">
          Je conçois des interfaces web modernes, responsive et maintenables,
          avec une attention particulière portée à l’expérience utilisateur et à
          la qualité du code.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="button button--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="button button--secondary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
