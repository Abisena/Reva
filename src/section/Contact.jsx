// src/components/Contact.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <p style={styles.subheading}>Get in touch with me.</p>
      <div style={styles.contactBox}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.620652595253!2d106.7893971652146!3d-6.645297210936233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c23e18c3fb73%3A0x401576d14fed1b0!2sCaringin%2C%20Kec.%20Caringin%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1684969735067!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} />
            <a href="tel:+62 857-1806-5697" style={styles.link}>
              +62 857-1806-5697
            </a>
          </div>
          <span style={styles.separator}>|</span>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
            <a
              href="https://www.linkedin.com/in/reva-aulia-putri-4661a5228/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              LinkedIn
            </a>
          </div>
          <span style={styles.separator}>|</span>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            <a
              href="https://www.instagram.com/revailyyy?igsh=MTM2eWx1b3B6b3I2bA=="
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    textAlign: "center",
    width: "100%",
    maxWidth: "1200px", // Optional max width
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2em",
    marginBottom: "30px",
    color: "#666",
  },
  contactBox: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px auto",
    width: "90%",
    boxSizing: "border-box",
  },
  map: {
    border: "0",
    borderRadius: "8px",
    marginBottom: "20px",
    width: "100%",
    height: "300px",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contactItem: {
    margin: "0 10px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "8px",
    fontSize: "1.5em",
    color: "#333",
  },
  link: {
    textDecoration: "none",
    color: "#0073b1", // LinkedIn blue
    fontSize: "1em",
  },
  separator: {
    margin: "0 10px",
    fontSize: "1.5em",
    color: "#333",
  },
  "@media (max-width: 768px)": {
    contactBox: {
      padding: "10px",
    },
    map: {
      height: "200px",
    },
    contactInfo: {
      flexDirection: "column",
    },
    separator: {
      display: "none",
    },
    contactItem: {
      margin: "10px 0",
    },
  },
};

export default Contact;
