import "./Achievements.css";
import { Link } from "react-router-dom";

import cow1 from "../assets/cow1.jpg";
import cow2 from "../assets/cow2.jpg";

import jerseyCow from "../assets/Jersey-Milking-Cow.jpg";
import girCow from "../assets/Gir-4.jpg";
import girlandoCow from "../assets/girlando.jpg";
import holsteinCow from "../assets/holstein_6.jpg";

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        {/* LEFT CONTENT */}
        <div className="achievements-left">
          <span className="achievements-tag">OUR ACHIEVEMENTS</span>
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
              Establishment of 200+ pregnancy within one year after establishing
              Bhadra Breeding Centre - IVF laboratory.
            </li>
            <li>
              Bhadra Breeding Centre having 100+ calf born through In-vitro
              fertilization and embryo transfer up till (Feb-2025).
            </li>
            <li>
              Achievements of 50% pregnancy rate in first outdoor trial at Kalas
              Group farmer animals (10 pregnancy out 20 embryo transfer on 22
              Dec 2024).
            </li>
            <li>Average 38% conception rate of farm around the year.</li>
            <li>
              Development of the first Girolando breed in India achieved 9000+
              milk in lactation (305 Days).
            </li>
          </ul>

          {/* ✅ Explore More Button -> Services Page */}
          <Link to="/services" className="achievements-btn">
            Explore More
          </Link>
        </div>

        {/* RIGHT STATS GRID */}
        <div className="achievements-right">
          <div className="stat-box green">
            <div className="stat-icon">🏆</div>
            <h3>5</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-box yellow">
            <div className="stat-icon">⭐</div>
            <h3>10</h3>
            <p>Award Winning</p>
          </div>

          <div className="stat-box yellow">
            <div className="stat-icon">🐄</div>
            <h3>100</h3>
            <p>Healthy Cattle Bred</p>
          </div>

          <div className="stat-box green">
            <div className="stat-icon">👨‍🌾</div>
            <h3>200</h3>
            <p>Satisfied Farmers</p>
          </div>
        </div>
      </div>

      {/* ================== FLIP SERVICE CARDS ================== */}
      <div className="flip-cards-container">
        {/* CARD 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* FRONT */}
            <div className="flip-card-front">
              <img src={cow1} alt="Premium IVF Solutions" />
              <div className="front-overlay">
                <h2>We Offer Premium IVF Solutions</h2>
              </div>
            </div>

            {/* BACK */}
            <div className="flip-card-back">
              <h3>Premium IVF Solutions</h3>
              <p>
                Advanced IVF procedures with high success rates, modern
                laboratories, and expert embryologists to improve cattle genetics
                and productivity.
              </p>
              <p className="category">Category: Bovine Reproduction</p>
            </div>
          </div>
        </div>

                {/* CARD 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cow2} alt="Targeted Gender Production" />
              <div className="front-overlay">
                <h2>Targeted Gender Production for Your Farm</h2>
              </div>
            </div>

            <div className="flip-card-back">
              <h3>Targeted Gender Production</h3>
              <p>
                Sex-sorted semen and advanced breeding techniques to increase
                female calf production and maximize dairy farm profitability.
              </p>
              <p className="category">Category: Bovine Reproduction</p>
            </div>
          </div>
        </div>
      </div> {/* END flip-cards-container */}

      {/* ===== VIEW MORE AFTER FLIP CARDS ===== */}
      <div className="flip-view-wrapper">
         <Link to="/products" className="flip-view-btn">
          View More
        </Link>
      </div>

      {/* ✅ CATTLE IMAGES SECTION */}


      {/* ✅ CATTLE IMAGES SECTION */}
      <div className="cattle-section">
        <div className="cattle-row">
          <div className="cattle-card">
            <img src={jerseyCow} alt="Jersey Milking Cow" />
          </div>

          <div className="cattle-card">
            <img src={girCow} alt="Gir Cow" />
          </div>

          <div className="cattle-card">
            <img src={girlandoCow} alt="Girlando Cow" />
          </div>

          <div className="cattle-card">
            <img src={holsteinCow} alt="Holstein Cow" />
          </div>
        </div>

        {/* ✅ VIEW MORE BUTTON (GO TO /gallery) */}
        <div className="view-more-wrapper">
          <Link to="/gallery" className="view-more-btn">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

