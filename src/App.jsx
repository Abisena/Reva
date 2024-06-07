import { useState } from "react";
import "./App.css"; // Pastikan Anda mengimpor file CSS Anda
import Contact from "./section/Contact";
import potoReva from "./components/images/revvv.jpg";
import potoProject from "./components/images/image.png";
import cv from "./components/file/CV ATS Reva Aulia Putri.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <nav>
        <div className="container">
          <input type="checkbox" id="toggle" hidden />
          <label htmlFor="toggle" className="toggle-btn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="dark-mode-toggle">
              <button onClick={toggleDarkMode}>
                {darkMode ? (
                  <span>
                    <FontAwesomeIcon icon={faSun} /> Light Mode
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faMoon} /> Dark Mode
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section id="home">
        <div className="profile">
          <img src={potoReva} alt="Reva" className="profile-image" />
          <div className="profile-text">
            <h2>Reva Aulia Putri</h2>
            <p>
              Hello! I am Reva Aulia Putri, a Finance & Accounting staff.
              Welcome to my portfolio. Here you find information about my
              projects, skills, and contact details.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/reva-aulia-putri-4661a5228/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/revailyyy?igsh=MTM2eWx1b3B6b3I2bA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="cv-view">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >
                <i className="fas fa-file-alt"></i> Lihat CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About</h2>
        <p>
          A student who graduated from SMK Wikrama Bogor with a major in Office
          Management and Business Services in 2024. Experienced for 6 months in
          the marketing division as a Marketing staff at PT Cobra Dental
          Indonesia and actively organized in school organizations. I have an
          interest in the field of administration and marketing.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects Ive worked on:</p>
        <div id="project-list" className="project-list">
          <div className="project">
            <img src={potoProject} alt="Project 1" className="project-image" />
            <h3>Project Pospay</h3>
            <p>
              Financial dashboard to present information, process and analyze
              data in the form of tables, charts and graphs
            </p>
            <a
              href="https://lookerstudio.google.com/embed/reporting/fee30472-8d74-4e71-ad1a-70e1d78294c0/page/XNWpD"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Visit Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Reva Aulia Putri</p>
      </footer>
    </div>
  );
}

export default App;
