import "./App.css";
import Contact from "./section/Contact";
import potoReva from "./components/images/revvv.jpg";
import potoProject from "./components/images/OIP.png";
import cv from "./components/file/CV ATS Reva Aulia Putri.pdf";

function App() {
  return (
    <>
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
          </ul>
        </div>
      </nav>

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

      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects Ive worked on:</p>
        <div id="project-list" className="project-list">
          <div className="project">
            <img src={potoProject} alt="Project 1" className="project-image" />
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
            <a
              href="https://example.com/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Visit Project
            </a>
          </div>
        </div>

        <style>{`
          .project-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .project {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px;
            width: 300px;
            box-sizing: border-box;
            text-align: center;
            background-color: #fff;
          }

          .project-image {
            width: 100%;
            border-radius: 8px;
          }

          .project-button {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
          }

          .project-button:hover {
            background-color: #0056b3;
          }
        `}</style>
      </section>

      <Contact />
      <footer>
        <p>&copy; 2024 Reva Aulia Putri</p>
      </footer>
    </>
  );
}

export default App;
