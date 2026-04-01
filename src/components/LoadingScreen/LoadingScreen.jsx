import "./LoadingScreen.scss";

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__content">
        <div className="loading-screen__ring"></div>
        <p className="loading-screen__label">Chargement du portfolio</p>
        <h1 className="loading-screen__title">Joseph Project</h1>
        <p className="loading-screen__subtitle">
          Développeur front-end React freelance
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
