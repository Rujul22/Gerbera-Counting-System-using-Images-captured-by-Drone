import React from "react";

const ContactUs = () => {
  return (
    <div className ="bg-green-100"style={styles.contactContainer} >
      <div style={styles.contactContent}>
        <div style={styles.contactForm}>
          <h1 style={{ ...styles.heading, ...styles.contactUsHeading }}>Contact Us</h1>
          <p style={styles.paragraph}>
            Have questions or feedback? Feel free to reach out to us using the form
            below.
          </p>
          <form>
            <div style={styles.formGroup}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                style={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                style={{ ...styles.input, height: "100px" }}
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button style={styles.button} type="submit">Send Message</button>
          </form>
        </div>
        <div style={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sIndia!6i17" 
            title="Map" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const styles = {
  contactContainer: {
    padding: "50px",
    backgroundColor: "gray-100",
    maxWidth: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  contactContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
  },
  contactForm: {
    flex: "0 1 calc(50% - 15px)",
    marginRight: "30px",
  },
  mapContainer: {
    flex: "0 1 calc(50% - 15px)",
    position: "relative",
    height: "500px", // Adjust the height as needed
    marginTop: "20px",
    borderRadius: "90px",
  },
  heading: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "36px",
  },
  paragraph: {
    marginBottom: "30px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontSize: "16px",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  contactUsHeading: {
    color: "green",
    textAlign: "center",
    animation: "bounce 2s infinite",
  },
};

// Define the animation using CSS
const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

// Inject the animation into the styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(bounceAnimation, styleSheet.cssRules.length);


