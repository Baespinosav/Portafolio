import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import autodocImage from './images/autodoc.png';

function AutoDoc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Link to="/" className="back-btn">Volver al inicio</Link>
      
      <div className="blog-container">
        <header className="blog-header">
          <h1>
            <span className="welcome-orange">AutoDoc</span>
          </h1>
          <p>Aplicación móvil para la gestión de documentos vehiculares en Chile</p>
        </header>

        <section className="blog-section">
          <img src={autodocImage} alt="AutoDoc App" className="blog-image"/>
          <h2>Descripción del Proyecto</h2>
          <p>
            AutoDoc es una aplicación móvil desarrollada en React Native y alojada en Firebase. 
            Permite a los conductores de Chile acceder y almacenar los documentos de sus vehículos en un solo lugar, 
            facilitando su disponibilidad y gestión.
          </p>
        </section>

        <section className="blog-section">
          <h2>Demo de la Aplicación</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube-nocookie.com/embed/H8_wqh8kFSY"
              title="Demo AutoDoc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="blog-section">
          <h2>Características Principales</h2>
          <div>
            <h3>Almacenamiento de Documentos</h3>
            <p>Los usuarios pueden almacenar documentos vehiculares, como permisos de circulación, SOAP y revisiones técnicas.</p>
            
            <h3>Asistente de IA</h3>
            <p>La aplicación incluye una inteligencia artificial que permite a los usuarios comunicarse y resolver dudas sobre su vehículo.</p>
            
            <h3>Modelo Actual</h3>
            <p>Actualmente, la aplicación soporta el modelo Subaru Impreza, con planes de expansión para incluir más modelos en el futuro.</p>
          </div>
        </section>

        <section className="blog-section">
          <h2>Tecnologías Utilizadas</h2>
          <div className="tech-stack">
            <span className="tech-item">React Native</span>
            <span className="tech-item">Firebase</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">JavaScript</span>
          </div>
        </section>
          <div className="landing-link-container">
            <a 
              href="https://landin-auto-doc.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="landing-link"
            >
              Visitar Landing Page
              <span className="landing-link-arrow">→</span>
            </a>
          </div>
      </div>
    </div>
  );
}

export default AutoDoc;