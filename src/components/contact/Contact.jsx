import { Link } from "react-router";
import "./contact.css";

export default function Contact() {
  return (
    <>
    <div className="contact-container">
      <div className="map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.187730805618!2d23.367223676307333!3d42.63617997116861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cb55668ae1%3A0x447f9dd693e57def!2sSoftware%20University!5e0!3m2!1sen!2sbg!4v1746450423850!5m2!1sen!2sbg"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"></textarea>

          <Link to='/' style={{marginTop:'5px'}}>Send</Link>
        </form>
      </div>
      </div>
    </>
  );
}
