import React from "react";
import "./Careers.css";
import careersHeaderBg from "../assets/Careers/careers-hero.jpg"; // ✅ downloaded header image

function Careers() {
  return (
    <>
      {/* ✅ HEADER BANNER (SAME AS ABOUT PAGE) */}
      <div
        className="about-page-header"
        style={{ backgroundImage: `url(${careersHeaderBg})` }}
      >
        <div className="about-page-header-overlay">
          <h2>Careers</h2>
          <p>
            Home <span>/</span> Pages <span>/</span> Careers
          </p>
        </div>
      </div>

      {/* ✅ YOUR ORIGINAL CAREERS SECTION (UNCHANGED) */}
      <section className="careers-section">
        <div className="careers-header">
          <span className="careers-tag">CAREERS</span>
          <h2>Opportunity for HR Professionals</h2>
        </div>

        <div className="careers-layout">
          {/* LEFT COLUMN */}
          <div className="career-box job-overview">
            <h3>Job Overview</h3>

            <div className="overview-item">
              <span>Job Title:</span>
              <p>Human Resources Manager</p>
            </div>

            <div className="overview-item">
              <span>Job ID:</span>
              <p>NA</p>
            </div>

            <div className="overview-item">
              <span>Department:</span>
              <p>Human Resources</p>
            </div>

            <div className="overview-item">
              <span>Location:</span>
              <p>Bhadra Breeding Centre</p>
            </div>

            <div className="overview-item">
              <span>Experience:</span>
              <p>3–5 Years</p>
            </div>

            <button
  className="apply-btn"
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfyFPTQNNIhIMJ_Q4SG72VNp4fO2DzDPX-xCOmEb6X1LyJgJw/viewform",
      "_blank"
    )
  }
>
  Apply Now
</button>

          </div>

          {/* RIGHT COLUMN */}
          <div className="career-details">
            <div className="career-box">
              <h3>About the Position</h3>
              <p>
                Join our team at Bhadra Breeding Centre, a leader in dairy farm
                operations. As an HR Manager, you will oversee labor management,
                develop and implement policies, and ensure full compliance with
                labor laws and statutory requirements including Provident Fund
                (PF), ESIC, and others.
              </p>
            </div>

            <div className="career-box">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>
                  Labor Management: Handle recruitment, training, employee
                  relations, and maintain payroll accuracy.
                </li>
                <li>
                  Policy Making: Develop and enforce HR policies, and coordinate
                  with authorities like MIDC, MPCB, Gram Panchayat.
                </li>
                <li>
                  PF & Statutory Compliance: Ensure timely deposits and
                  record-keeping for PF, ESIC, PT, MLF, etc.
                </li>
                <li>
                  HR Support: Collaborate with dairy operations to align HR
                  efforts with goals.
                </li>
              </ul>
            </div>

            <div className="career-box">
              <h3>Requirements</h3>
              <ul>
                <li>
                  <strong>Education:</strong> Bachelor’s in HR, Management, or
                  related field.
                </li>
                <li>
                  <strong>Experience:</strong> 3–5 years of HR experience,
                  ideally in agriculture or dairy sector.
                </li>
                <li>
                  <strong>Skills:</strong> Labor laws knowledge, leadership,
                  strong communication, adaptability.
                </li>
              </ul>
            </div>

            <div className="career-box">
              <h3>What We Offer</h3>
              <ul>
                <li>Competitive salary and benefits.</li>
                <li>
                  Opportunity to work in a dynamic and growing dairy farm
                  environment.
                </li>
                <li>Supportive team and growth-oriented culture.</li>
              </ul>
              <p className="closing-text">
                If you’re passionate about HR and agriculture, we’d love to hear
                from you!
              </p>
            </div>

            <div className="career-box">
              <h3>Contact Information</h3>
              <p>
                Mr. Sanjay Malode <br />
                Phone: 7741035079, 8484960068 <br />
                Farm Manager <br />
                Bhadra Breeding Centre
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
