import "./Services1.css";

import heroBg from "../../assets/Services/services-hero.jpg";
import embryoProduction from "../../assets/Services/embryo-production.jpg";
import embryoTransfer from "../../assets/Services/embryo-transfer.jpg";
import breedingProgram from "../../assets/Services/breeding-program.jpg";

import experienceIcon from "../../assets/Services/experience1.png";
import awardIcon from "../../assets/Services/acv 2.png";
import cattleIcon from "../../assets/Services/animal3.png";
import farmerIcon from "../../assets/Services/client4.png";

function Services1() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <div
        className="services1-page-header"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="services1-page-header-overlay">
          <div className="container text-center">
            <h1 className="page-title animate-slide-down">Services</h1>

            <nav aria-label="breadcrumb" className="animate-fade-in">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <span>Pages</span>
                </li>
                <li className="breadcrumb-item active">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* ===== SERVICES CARDS ===== */}
      <section className="services-section">
        <div className="services-heading">
          <div className="services-mini-title">
            <span className="line"></span>
            <span className="text">OUR SERVICES</span>
            <span className="line"></span>
          </div>

          <h2 className="services-main-title">
            Services That We Offer For Your <br /> Farm
          </h2>
        </div>

        <div className="services-grid">
          <div className="services-card">
            <div className="services-image">
              <img src={embryoProduction} alt="Embryo Production" />
            </div>
            <div className="services-content">
              <h3>Embryo Production</h3>
              <p>
                Production of elite embryo of farmer donor by using desired sex
                semen of different breeds. High genetic embryo production of
                Girolando, Jersey, Holstein Friesian and Gir.
              </p>
            </div>
          </div>

          <div className="services-card">
            <div className="services-image">
              <img src={embryoTransfer} alt="Embryo Transfer" />
            </div>
            <div className="services-content">
              <h3>Embryo Transfer</h3>
              <p>
                We provide farm door services of embryo transfer of desired breed
                to improve milk production or conservation of breed.
              </p>
            </div>
          </div>

          <div className="services-card">
            <div className="services-image">
              <img src={breedingProgram} alt="Breeding Program" />
            </div>
            <div className="services-content">
              <h3>Breeding Program</h3>
              <p>
                We provide service at organized farms or farmer door steps to
                improve breeding programs through ART, IVF and Artificial
                Insemination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="achievements-content">
            <span className="achievements-subtitle">OUR ACHIEVEMENTS</span>
            <h2>Few Reasons Why People Choose Us!</h2>

            <p>
              People choose our IVF center because we offer the highest success
              rates in cattle breeding, backed by our experienced team and
              cutting-edge technologies. We pride ourselves on having the latest
              and most expensive IVF equipment in India, ensuring the best care
              and outcomes for livestock breeding.
            </p>

            <ul className="achievements-list">
              <li>
                Establishment of 200+ pregnancy within one year after
                establishing Bhadra Breeding Centre -IVF laboratory.
              </li>
              <li>
                Bhadra Breeding Centre having 100+ calf born through In-vitro
                fertilization and embryo transfer up till (Feb-2025).
              </li>
              <li>
                Achievements of 50% pregnancy rate in first outdoor trial at
                Kalas Group farmer animals (10 pregnancy out 20 embryo transfer
                on 22 Dec 2024).
              </li>
              <li>Average 38% conception rate of farm around the year.</li>
              <li>
                Development of the first Girolando breed in India achieved 9000+
                milk in lactation (305 Days).
              </li>
            </ul>
          </div>

          <div className="achievements-stats">
            <div className="stat-box green">
              <img src={experienceIcon} className="stat-icon" alt="Experience" />
              <h3>5</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-box yellow">
              <img src={awardIcon} className="stat-icon" alt="Awards" />
              <h3>10</h3>
              <p>Award Winning</p>
            </div>

            <div className="stat-box yellow">
              <img src={cattleIcon} className="stat-icon" alt="Cattle" />
              <h3>100</h3>
              <p>Healthy Cattle Bred</p>
            </div>

            <div className="stat-box green">
              <img src={farmerIcon} className="stat-icon" alt="Farmers" />
              <h3>200</h3>
              <p>Satisfied Farmers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services1;
