import React from "react";
import { SharedFooter } from "./AboutUsPage";

const ContactUsPage = () => {
  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        backgroundColor: "#f8f5ef",
        color: "#2a1f0e",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500&display=swap');

        .contact-hero {
          background: #ede3d1;
          padding: 120px 40px;
          text-align: center;
          color: black;
        }

        .contact-hero h1 {
          font-size: 4.5rem;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .contact-hero p {
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          opacity: 0.8;
        }

        .contact-section {
          max-width: 1000px;
          margin: auto;
          padding: 100px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          color: #5d3d17;
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 35px;
        }

        .contact-icon {
          font-size: 1.8rem;
          min-width: 40px;
        }

        .contact-text h3 {
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: #5d3d17;
          margin-bottom: 5px;
        }

        .contact-text p {
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          color: #3e3122;
          line-height: 1.6;
        }

        .contact-form h2 {
          font-size: 2.5rem;
          color: #5d3d17;
          margin-bottom: 40px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border: 1px solid #d4c5a9;
          border-radius: 12px;
          background: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: #2a1f0e;
          outline: none;
          box-sizing: border-box;
          transition: border 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #5d3d17;
        }

        .form-group textarea {
          height: 150px;
          resize: vertical;
        }

        .submit-btn {
          background: #2f2215;
          color: white;
          border: none;
          padding: 18px 50px;
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: #5d3d17;
        }

        .map-section {
          background: #ede3d1;
          padding: 80px 40px;
          text-align: center;
        }

        .map-section h2 {
          font-size: 2.5rem;
          color: #5d3d17;
          margin-bottom: 40px;
        }

        .map-embed {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(0,0,0,0.15);
          max-width: 1000px;
          margin: auto;
        }

        @media(max-width: 768px) {
          .contact-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-hero h1 {
            font-size: 3rem;
          }
        }
      `}</style>

      <section className="contact-hero">
        <h1>Контакт</h1>
        <p>Секогаш сме тука за вас</p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Најдете не</h2>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-text">
              <h3>Адреса</h3>
              <p>Село Арвати, Преспа<br />Македонија, 7317</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-text">
              <h3>Е-пошта</h3>
              <p>adimovski00@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <h3>Телефон</h3>
              <p>+389 76 387 262</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Пратете порака</h2>

          <div className="form-group">
            <input type="text" placeholder="Вашето име" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Вашата е-пошта" />
          </div>

          <div className="form-group">
            <textarea placeholder="Вашата порака..." />
          </div>

          <button className="submit-btn">Прати порака</button>
        </div>
      </section>

      <section className="map-section">
        <h2>Каде сме?</h2>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d20.9833!3d40.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350d5b9a5b9a5b9%3A0x0!2zQXJ2YXRpLCBNYWNlZG9uaWE!5e0!3m2!1sen!2smk!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      <SharedFooter footerImg="/media/slika5.jpg" />
    </div>
  );
};

export default ContactUsPage;