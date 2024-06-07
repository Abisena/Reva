import "./App.css";
import Contact from "./section/Contact";
import { useState } from "react";
import potoReva from "./components/images/revvv.jpg";
import potoProject from "./components/images/OIP.png";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
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
          <ul className="nav-menu" id="menu">
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
              Hello! I am Reva Aulia Putri, a Finnance & Accounting staff.
              Welcome to my portfolio. Here you find information about my
              projects, skills, and contact details.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/reva-aulia-putri-4661a5228/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/revailyyy?igsh=MTM2eWx1b3B6b3I2bA=="
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* <div className="cv-download">
              <a
                href="./src/assets/file/CV-Muhamad Abisena Putrawan.pdf"
                target="_blank"
                download
              >
                <i className="fas fa-file-download"></i> Download CV
              </a>
            </div> */}
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
            <a href="#" className="project-link" onClick={openModal}>
              <img src={potoProject} alt="Project 1" />
            </a>
          </div>
        </div>

        {modalOpen && (
          <div id="modal1" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Project 1</h2>
              <p>Description of Project 1.</p>
              <img src={potoProject} alt="Project 1" />
            </div>
          </div>
        )}

        {modalOpen && <div id="modal-overlay" onClick={closeModal}></div>}

        <style>{`
          .modal {
            display: ${modalOpen ? "block" : "none"};
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 600px;
          }

          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
          }

          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }

          #modal-overlay {
            display: ${modalOpen ? "block" : "none"};
            position: fixed;
            z-index: 2;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
          }
        `}</style>
      </section>

      {/* <section id="certificates">
        <h2>Certificates</h2>
        <div className="certificates">
          <img
            src="./src/components/images/revvv.jpg"
            alt="Certificate 1"
            className="certificate-image"
            // onClick={() => openModal("./src/components/images/revvv.jpg")}
          />
          <img
            src="./src/components/images/revvv.jpg"
            alt="Certificate 2"
            className="certificate-image"
            // onClick={() => openModal("./src/components/images/revvv.jpg")}
          />
        </div>
      </section> */}

      <Contact />
      <footer>
        <p>&copy; 2024 Reva Aulia Putri</p>
      </footer>

      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modalImage" />
        <div id="caption"></div>
      </div>
    </>
  );
}

export default App;
