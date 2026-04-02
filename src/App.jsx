import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import "./styles/_global.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const startClosing = setTimeout(() => {
      setIsClosing(true);
    }, 400);

    const endLoading = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => {
      clearTimeout(startClosing);
      clearTimeout(endLoading);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isClosing={isClosing} />}

      {!isLoading && (
        <>
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>

          <Navbar />

          <main id="main-content">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
