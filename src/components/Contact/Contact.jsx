import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__card card">
          <p className="contact__eyebrow">Contact</p>
          <h2 className="section-title">Parlons de votre projet</h2>
          <p className="contact__text">
            Vous avez besoin d’une interface web moderne, d’une intégration
            responsive ou d’une amélioration front-end sur un site existant ?
            Échangeons sur votre besoin.
          </p>

          <ul className="contact__list">
            <li>
              <span>Email</span>
              <a href="mailto:ton-adresse-mail@example.com">
                Me contacter par email
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a
                href="https://github.com/JojoProj3ct"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir mes projets sur GitHub
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/ton-profil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Découvrir mon profil LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
