import React from 'react'
import './Style/contact.css'
import { FaLine, FaFacebook, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa6';


const contacts = [
  { name: "LINE", icon: <FaLine className="icon line" />, link: "https://line.me/ti/p/your-id", username: "@CCW_NTW" },
  { name: "Facebook", icon: <FaFacebook className="icon facebook" />, link: "https://www.facebook.com/chatchawan.ngernthaworn", username: "Chatchawan Ngernthaworn" },
  { name: "Instagram", icon: <FaInstagram className="icon instagram" />, link: "https://www.instagram.com/dew_cookie_404/", username: "@dew_cookie_404" },
   { name: "GitHub", icon: <FaGithub />, link: "https://github.com/ChatchawanDew404", username: "ChatchawanDew404" },
  { name: "Gmail", icon: <FaEnvelope className="icon gmail" />, link: "", username: "chatchawan13022547 @gmail.com" },
];

function Contact() {
  return (
    <>
    <div className="contact-container">
       <div className="heading"><h2>MY <span className="colorTx">Contact</span></h2></div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className={`icon ${contact.name.toLowerCase()}`}>{contact.icon}</div>
            <span>{contact.username}</span>
          </a>
        ))}
      </div>
    </div>
    </>
  )
}

export default Contact