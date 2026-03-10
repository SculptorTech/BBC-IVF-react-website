import "./Contact.css";
import contactHeaderBg from "../assets/contact/header.jpg";

function Contact() {
  return (
    <>
      {/* ✅ HEADER BANNER */}
      <div
        className="about-page-header"
        style={{ backgroundImage: `url(${contactHeaderBg})` }}
      >
        <div className="about-page-header-overlay">
          <h2>Contact</h2>
          <p>
            Home <span>/</span> Pages <span>/</span> Contact
          </p>
        </div>
      </div>

      {/* ✅ CONTACT SECTION */}
      <section className="contact-section">
        {/* HEADER */}
        <div className="contact-header">
          <span className="contact-tag">CONTACT US</span>

          {/* ✅ RESPONSIVE TEXT (NO EXTRA BR) */}
          <h2 className="contact-title">
            If You Have Any Query, Please Contact Us
          </h2>
        </div>

        {/* CONTENT */}
        <div className="contact-container">
          {/* LEFT FORM */}
          <div className="contact-form">
            <h3>Need a Service from Us?</h3>
            <p>
              Contact us today so that we can schedule a time or video meeting
              with you, to discuss how we can be of help. Or contact to order our
              products.
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* RIGHT DETAILS */}
          <div className="contact-details">
            <h3>Contact Details</h3>

            <div className="detail-item">
              <span className="icon">📍</span>
              <div>
                <strong>Our Office</strong>
                <p>
                  Bhadra Breeding Center At Khardi Pimpalgaon Post: Sultanpur Tq.
                  Khultabad Dist Cha. Sambhaji Nagar PIN : 431101
                </p>
              </div>
            </div>

            <div className="detail-item">
              <span className="icon">📞</span>
              <div>
                <strong>Call Us</strong>
                <p>7741035079</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="icon">✉️</span>
              <div>
                <strong>Mail Us</strong>
                <p>info@bhadrabreedingcentre.com</p>
              </div>
            </div>

            {/* MAP */}
            <div className="contact-map">
              <iframe
                title="Bhadra Breeding Centre Location"
                src="https://www.google.com/maps?q=Khardi%20Pimpalgaon%20Maharashtra&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
