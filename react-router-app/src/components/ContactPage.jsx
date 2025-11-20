import "../index.css";

function ContactPage() {
  function handlefun(e){

alert("Form Submit Successfully")
  }
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us 📩</h1>

      <p className="contact-subtitle">
        Have any questions? Feel free to send us a message!
      </p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="input-box"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input-box"
          required
        />
        <textarea
          placeholder="Your Message"
          className="input-box textarea-box"
          required
        ></textarea>

        <button type="submit" className="contact-btn" onClick={handlefun}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
