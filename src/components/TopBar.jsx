import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      {/* LEFT */}
      <div className="topbar-left">
        <span className="follow-text">Follow Us:</span>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a
          href="https://wa.me/917741035079"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <i className="fa-solid fa-phone phone-icon"></i>
        <span className="call-text">
          Call Us: <span className="call-number">+91 7741035079</span>
        </span>
      </div>
    </div>
  );
}

export default TopBar;
