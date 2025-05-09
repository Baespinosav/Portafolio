import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import autodocImage from './images/autodoc.png';
import javaLogo from './images/java-logo.png';
import kisImage from './images/kis.png';
import pythonLogo from './images/python-logo.png';
import reactLogo from './images/react-logo.png';
import spotyImage from './images/spoty.png';
import html from './images/html.png';
import css from './images/css.png';
import angular from './images/angular.png';
import sql from './images/sql.png';
import firebase from './images/firebase.png';
import git from './images/git.png';
import gcp from './images/gcp.png';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* Sección de bienvenida */}
      <header className="App-header">
        <h1 className="welcome-line">
          <span className="welcome-orange">¡Hola!</span> <span className="welcome-white">Soy Bastián Espinosa.</span>
        </h1>
        <p>Ingeniero en Informática titulado apasionado por la tecnología y el desarrollo de software.</p>

        <div className="social-buttons">
        <a 
          href="https://github.com/Baespinosav" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/bastian-espinosa19/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button"
        >
          <FaLinkedin />
        </a>
        <a 
          href={process.env.PUBLIC_URL + '/CV-bastian-espinosa.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          <FaFileDownload />
        </a>
      </div>
      </header>

      

      {/* Sección de experiencia laboral */}
      <section className="Experience-section">
        <h2>Experiencia Laboral</h2>
        <div className="cards-container">
          <div className="experience-card">
            <img src={kisImage} alt="KIS QA" className="card-image"/>
            <div className="card-content">
              <h3>KIS - Analista QA</h3>
              <span className="experience-date">Agosto 2024 - Marzo 2025</span>
              <p>Asegurar el funcionamiento de la página web del cliente utilizando herraminetas de QA y asegurar los modulos nuevos implementados.</p>
            </div>
          </div>
          <div className="experience-card">
            <img src={kisImage} alt="KIS BI" className="card-image"/>
            <div className="card-content">
              <h3>KIS - Desarrollador BI</h3>
              <span className="experience-date">Agosto 2024 - Marzo 2025</span>
              <p>Migración de reportes Power BI y desarrollo de procedimientos almacenados SQL para lógica de negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de proyectos */}
      <section className="Projects-section">
        <h2>Proyectos</h2>
        <div className="cards-container">
          <div className="project-card">
            <img src={autodocImage} alt="AutoDoc Project" className="card-image"/>
            <div className="card-content">
              <h3>AutoDoc</h3>
              <p>Aplicación móvil para conductores en Chile: gestión digital de documentos vehiculares y diagnostico del vehículo</p>
              <Link to="/autodoc" className="know-more-btn">
                Conoce más
              </Link>
            </div>
          </div>
          <div className="project-card">
            <img src={spotyImage} alt="Spotify Clone Project" className="card-image"/>
            <div className="card-content">
              <h3>Copia Spotify</h3>
              <p>Aplicación web para reproducción de música sin anuncios utilizando API de Google.</p>
              <Link to="/spotify-clone" className="know-more-btn">
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con lenguajes de programación */}
      <footer className="Skills-section">
        <h2>Tecnologías que manejo</h2>
        <div className="skills-container">
          <div className="skill-card">
            <img src={reactLogo} alt="React" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src={pythonLogo} alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <img src={javaLogo} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src={angular} alt="Angular" />
            <p>Angular</p>
          </div>
          <div className="skill-card">
            <img src={firebase} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className="skill-card">
            <img src={gcp} alt="GCP" />
            <p>Google Cloud</p>
          </div>
          <div className="skill-card">
            <img src={git} alt="Git" />
            <p>Git</p>
          </div>
          <div className="skill-card">
            <img src={html} alt="HTML" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <img src={css} alt="CSS" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <img src={sql} alt="SQL" />
            <p>SQL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;