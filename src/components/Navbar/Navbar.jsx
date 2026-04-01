import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo">
          Jojo Project
        </a>

        <nav className="navbar__nav" aria-label="Navigation principale">
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
