import { useState } from "react";
import "./Gallery1.css";

// HERO
import heroBg from "../assets/gallery/gallery-hero.jpg";

// HOLSTEIN
import h1 from "../assets/gallery/holstein/1.jpg";
import h2 from "../assets/gallery/holstein/2.jpg";
import h3 from "../assets/gallery/holstein/3.jpg";
import h4 from "../assets/gallery/holstein/4.jpg";

// GIRALANDO
import g1 from "../assets/gallery/giralando/1.jpg";
import g2 from "../assets/gallery/giralando/2.jpg";
import g3 from "../assets/gallery/giralando/3.jpg";
import g4 from "../assets/gallery/giralando/4.jpg";

// JERSEY (ONLY 3 IMAGES – OK)
import j1 from "../assets/gallery/jersey/1.jpg";
import j2 from "../assets/gallery/jersey/2.jpg";
import j3 from "../assets/gallery/jersey/3.jpg";

// GIR
import gr1 from "../assets/gallery/gir/1.jpg";
import gr2 from "../assets/gallery/gir/2.jpg";
import gr3 from "../assets/gallery/gir/3.jpg";
import gr4 from "../assets/gallery/gir/4.jpg";

// MACHINARIES (STATIC)
import m1 from "../assets/gallery/machineries/1.jpg";
import m2 from "../assets/gallery/machineries/2.jpg";
import m3 from "../assets/gallery/machineries/3.jpg";
import m4 from "../assets/gallery/machineries/4.jpg";
import m5 from "../assets/gallery/machineries/5.jpg";
import m6 from "../assets/gallery/machineries/6.jpg";
import m7 from "../assets/gallery/machineries/7.jpg";
import m8 from "../assets/gallery/machineries/8.jpg";

/* ===== GROUP IMAGES ===== */
const holsteinImages = [h1, h2, h3, h4];
const giralandoImages = [g1, g2, g3, g4];
const jerseyImages = [j1, j2, j3];
const girImages = [gr1, gr2, gr3, gr4];

/* ===== FILTER DATA ===== */
const galleryData = {
  All: [...holsteinImages, ...giralandoImages, ...jerseyImages, ...girImages],
  Holstein: holsteinImages,
  Giralando: giralandoImages,
  Jersey: jerseyImages,
  Gir: girImages,
};

function Gallery1() {
  const [active, setActive] = useState("All");

  return (
    <>
      {/* ===== HERO ===== */}
      <div className="page-header" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="page-header-overlay">
          <div className="container text-center">
            <h1>Gallery</h1>
            <p>Home / Pages / Gallery</p>
          </div>
        </div>
      </div>

      {/* ===== FILTERABLE GALLERY ===== */}
      <section className="gallery-section">
        <div className="filter-buttons">
          {Object.keys(galleryData).map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryData[active].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="cattle" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR MACHINARIES (STATIC) ===== */}
      <section className="machineries-section">
        <h3 className="section-title">
          <span></span> OUR MACHINARIES <span></span>
        </h3>

        <div className="machineries-grid">
          {[m1, m2, m3, m4, m5, m6, m7, m8].map((img, index) => (
            <div className="machinery-card" key={index}>
              <img src={img} alt="machinery" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery1;
