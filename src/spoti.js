import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import spotyImage from './images/spoty.png';

function SpotiFree() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Link to="/" className="back-btn">Volver al inicio</Link>
      
      <div className="blog-container">
        <header className="blog-header">
          <h1>
            <span className="welcome-orange">SpotiFree</span>
          </h1>
          <p>Aplicación web para reproducción de música sin anuncios</p>
        </header>

        <section className="blog-section">
          <img src={spotyImage} alt="SpotiFree App" className="blog-image"/>
          <h2>Descripción del Proyecto</h2>
          <p>
            SpotiFree es una aplicación web desarrollada con React que permite a los usuarios 
            disfrutar de música sin interrupciones publicitarias. Utilizando la API de Google, 
            la aplicación ofrece una experiencia similar a Spotify pero sin la necesidad de una 
            suscripción premium.
          </p>
        </section>

        <section className="blog-section">
          <h2>Demo de la Aplicación</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube-nocookie.com/embed/hTuJPkgBuHs"
              title="Demo SpotiFree"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="blog-section">
          <h2>Características Principales</h2>
          <div>
            <h3>Reproducción sin Anuncios</h3>
            <p>Disfruta de tu música favorita sin interrupciones publicitarias.</p>
            
            <h3>Integración con Google</h3>
            <p>Utiliza la API de Google para acceder a una amplia biblioteca de música.</p>
            
            <h3>Interfaz Intuitiva</h3>
            <p>Diseño moderno y fácil de usar, inspirado en las mejores aplicaciones de streaming.</p>
          </div>
        </section>

        <section className="blog-section">
          <h2>Tecnologías Utilizadas</h2>
          <div className="tech-stack">
            <span className="tech-item">React</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">Google API</span>
            <span className="tech-item">HTML5/CSS3</span>
          </div>
        </section>

          <div className="landing-link-container">
            <a 
              href="https://spoti-free.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="landing-link"
            >
              Visitar SpotiFree
              <span className="landing-link-arrow">→</span>
            </a>
          </div>
      </div>
    </div>
  );
}

export default SpotiFree;