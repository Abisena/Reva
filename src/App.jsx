import "./App.css";
import Contact from "./section/Contact";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#certificates">Certificates</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <div className="profile">
          <img
            src="./src/assets/images/revvv.jpg"
            alt="Reva"
            className="profile-image"
          />
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
        <div className="project-list">
          <div className="project">
            <a
              href="https://lookerstudio.google.com/embed/reporting/fee30472-8d74-4e71-ad1a-70e1d78294c0/page/XNWpD"
              target="_blank"
            >
              <img src="./src/assets/images/OIP.png" alt="Project 1" />
            </a>
          </div>
        </div>
      </section>

      {/* <section id="certificates">
        <h2>Certificates</h2>
        <div className="certificates">
          <img
            src="./src/assets/images/revvv.jpg"
            alt="Certificate 1"
            className="certificate-image"
            // onClick={() => openModal("./src/assets/images/revvv.jpg")}
          />
          <img
            src="./src/assets/images/revvv.jpg"
            alt="Certificate 2"
            className="certificate-image"
            // onClick={() => openModal("./src/assets/images/revvv.jpg")}
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
