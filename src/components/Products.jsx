
import { useEffect, useState } from "react";
import "./Products.css";

import productHeaderBg from "../assets/Products/products-hero.jpg";

// ✅ 4 Product Cards Images
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

// ✅ SECTION-1 (Launching Soon) Images
import launchImg1 from "../assets/Products/launching1.jpg";
import launchImg2 from "../assets/Products/launching2.jpg";

// ✅ SECTION-2 (Slider) Images - 8
import s1 from "../assets/Products/slider1.png";
import s2 from "../assets/Products/slider2.png";
import s3 from "../assets/Products/slider3.png";
import s4 from "../assets/Products/slider4.png";
import s5 from "../assets/Products/slider5.png";
import s6 from "../assets/Products/slider6.png";
import s7 from "../assets/Products/slider7.png";
import s8 from "../assets/Products/slider8.png";

// ✅ SECTION-4 (Achievements) Icons
import icon1 from "../assets/Products/icon1.png";
import icon2 from "../assets/Products/icon2.png";
import icon3 from "../assets/Products/icon3.png";
import icon4 from "../assets/Products/icon4.png";

/**
 ✅ showHero = true  -> show banner image (Products Page)
 ✅ showFull = true  -> show Launching + Slider + Achievements (Products Page)
 ✅ Home Page -> pass showHero={false} showFull={false}
 */
function Products({ showHero = true, showFull = true }) {
  // ✅ 8 Slider Items + Names
  const sliderItems = [
    {
      img: s1,
      title: "Recorded animals in the first lactation yield of Holstein Friesian.",
    },
    {
      img: s2,
      title: "Recorded animals in the first lactation yield of Jersey.",
    },
    {
      img: s3,
      title: "Jersey 203522 Born through Imported Embryo transfer.",
    },
    { img: s4, title: "Jersey 203418 Born Through Imported Embryo Transfer." },
    { img: s5, title: "Girolando 1101" },
    { img: s6, title: "Girolando 1103" },
    {
      img: s7,
      title: "Holstein-341 Till date Given 33832Kg Milk (305 Days Milk-12896).",
    },
    { img: s8, title: "Gemonic Report" },
  ];

  // ✅ Slider Pagination (3 + 3 + 2)
  const visibleCards = 3;
  const maxSlideIndex = Math.ceil(sliderItems.length / visibleCards) - 1;
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setSlideIndex((prev) =>
      prev < maxSlideIndex ? prev + 1 : maxSlideIndex
    );
  };

  const start = slideIndex * visibleCards;
  const visibleItems = sliderItems.slice(start, start + visibleCards);

  // ✅ Modal Popup State (ONLY FOR PRODUCTS PAGE)
  const [openModal, setOpenModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const handleOpenModal = (item) => {
    setActiveSlide(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveSlide(null);
  };

  // ✅ ESC to close modal
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (openModal) {
      document.addEventListener("keydown", escHandler);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", escHandler);
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <>
      {/* ✅ HEADER BANNER (SHOW ONLY ON PRODUCTS PAGE) */}
      {showHero && (
        <div
          className="products-page-header"
          style={{ backgroundImage: `url(${productHeaderBg})` }}
        >
          <div className="about-page-header-overlay">
            <h2>Products</h2>
            <p>
              Home <span>/</span> Pages <span>/</span> Products
            </p>
          </div>
        </div>
      )}

      {/* ✅ SECTION 1 (Launching Soon) - PRODUCTS PAGE ONLY */}
      {showFull && (
        <section className="launching-section">
          <div className="launching-container">
            {/* LEFT SIDE */}
            <div className="launching-left">
              <p className="launching-tag">LAUNCHING SOON</p>
              <h2 className="launching-title">Where Purity Meets Traditions</h2>

              <div className="launching-images">
                <div className="launch-card">
                  <img src={launchImg1} alt="Launching Soon Product" />
                </div>

                <div className="launch-card">
                  <img src={launchImg2} alt="Launching Soon Poster" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="launching-right">
              <p className="launching-desc">
                We believe that happy cows are the key to healthy milk, and our
                modern infrastructure ensures our cows are cared for just like
                patients in a hospital. From our farm to your family, we
                guarantee only the best.
              </p>

              <ul className="launching-points">
                <li>
                  A herd of 600+ cows, including GIR, HF, and Jersey breeds.
                </li>
                <li>Daily production of 10,000 liters of high-quality milk.</li>
                <li>A dedicated team of 50+ skilled personnel.</li>
                <li>Turkey-imported fully automatic silage machine to provide.</li>
              </ul>

              <h3 className="launching-mobile">Mobile: 9158192021</h3>

              <div className="launching-address">
                <h4>City office..</h4>
                <p>
                  D 2,4th floor prozone Trade centre prozone mall chikalthana,
                  chhatrapati sambhajinagar.431007
                </p>
                <p>
                  Shri Bhadra Dairy Farm Gut no 235, Khandi pimpalgaon taluka
                  khultabad district chhatrapati sambhajinagar 431101
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ✅ SECTION 2 (Slider) - PRODUCTS PAGE ONLY */}
      {showFull && (
        <section className="product-slider-section">
          <div className="product-slider-title">
            <span className="line"></span>
            <h3>OUR PRODUCTS</h3>
            <span className="line"></span>
          </div>

          <div className="product-slider-wrapper">
            <button
              className={`slider-btn left ${
                slideIndex === 0 ? "disabled" : ""
              }`}
              onClick={handlePrev}
              disabled={slideIndex === 0}
            >
              ‹
            </button>

            <div className="product-slider-cards">
              {visibleItems.map((item, idx) => (
                <div className="slider-card" key={idx}>
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => handleOpenModal(item)}
                    className="clickable-slide"
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>

            <button
              className={`slider-btn right ${
                slideIndex === maxSlideIndex ? "disabled" : ""
              }`}
              onClick={handleNext}
              disabled={slideIndex === maxSlideIndex}
            >
              ›
            </button>
          </div>
        </section>
      )}

      {/* ✅ MODAL POPUP - PRODUCTS PAGE ONLY */}
      {showFull && openModal && activeSlide && (
        <div className="slider-modal-overlay" onClick={handleCloseModal}>
          <div
            className="slider-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="slider-modal-close" onClick={handleCloseModal}>
              ✕
            </button>

            <img
              src={activeSlide.img}
              alt={activeSlide.title}
              className="slider-modal-image"
            />
          </div>
        </div>
      )}

      {/* ✅ SECTION 3 (4 Product Cards) - SHOW ON BOTH HOME + PRODUCTS */}
      <section className="products-section">
        <div className="products-top-title">
          <span className="products-line"></span>
          <p>OUR PRODUCTS FOR LIVESTOCK BREEDING</p>
          <span className="products-line"></span>
        </div>

        <div className="products-row">
          <div className="product-card">
            <div className="product-img">
              <img src={p1} alt="Female Male Calves" />
            </div>

            <div className="product-content">
              <h3>Female/Male Calves Available</h3>
              <p>
                Different ages of calf produce from high genetic (Pedigree) or
                from tested genomic of dams and sire of Girolando, Jersey,
                Holstein Friesian and Gir (Indigenous Gir, 50%Brazilian Gir, 75%
                Brazilian Gir).
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src={p2} alt="Pregnant Heifer" />
            </div>

            <div className="product-content">
              <h3>Pregnant Heifer</h3>
              <p>
                Cross bred heifer impregnated with high genetic produced embryo
                of Girolando, Jersey, Holstein Friesian and Gir (Indigenous Gir,
                50% Brazilian Gir, 75% Brazilian Gir) of different stages of
                pregnancy (Early, Mid and Advance).
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src={p3} alt="Embryos Transfer" />
            </div>

            <div className="product-content">
              <h3>Top-Quality Embryos for Transfer</h3>
              <p>
                High genetic produced embryo of Girolando, Jersey, Holstein
                Friesian and Gir (Indigenous Gir, 50%Brazilian Gir, 75% Brazilian
                Gir).
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src={p4} alt="Customized Plans" />
            </div>

            <div className="product-content">
              <h3>Customized Breeding Plans</h3>
              <p>
                The Heifer Shed at Vadoz, located 9 km from the main farm, is
                dedicated to the Embryo Transfer program.
              </p>
            </div>
          </div>
        </div>
        
      </section>

      {/* ✅ SECTION 4 (Achievements) - PRODUCTS PAGE ONLY */}
      {showFull && (
        <section className="achievements-section">
          <div className="achievements-container">
            <div className="achievements-left">
              <div className="achievements-top">
                <span className="achievements-label">OUR ACHIEVEMENTS</span>
              </div>

              <h2 className="achievements-title">
                Premium Quality <br /> Livestock & Embryos
              </h2>

              <p className="achievements-desc">
                We offer high-genetic embryos, pedigree calves, and pregnant
                heifers, ensuring superior breeding outcomes for dairy and
                livestock farming.
              </p>

              <div className="achievements-info">
                <h3>Embryo</h3>
                <ul>
                  <li>
                    High-genetic embryos from Girolando, Jersey, Holstein
                    Friesian, and Gir breeds.
                  </li>
                  <li>
                    Available in Indigenous Gir, 50% Brazilian Gir, and 75%
                    Brazilian Gir variants.
                  </li>
                </ul>

                <h3>Calf (Female/Male)</h3>
                <ul>
                  <li>
                    Calves of different ages produced from high-genetic
                    (pedigree) or tested genomic dams and sires.
                  </li>
                  <li>
                    Breeds include Girolando, Jersey, Holstein Friesian, and Gir.
                  </li>
                </ul>

                <h3>Pregnant Heifer</h3>
                <ul>
                  <li>Crossbred heifers impregnated with high-genetic embryos.</li>
                  <li>
                    Available at different stages of pregnancy: Early, Mid, and
                    Advanced.
                  </li>
                </ul>
              </div>
            </div>

            <div className="achievements-right">
              <div className="ach-grid">
                <div className="ach-box green">
                  <div className="ach-icon">
                    <img src={icon1} alt="Genetic Embryos" />
                  </div>
                  <h2>0</h2>
                  <p>Genetic Embryos</p>
                </div>

                <div className="ach-box yellow">
                  <div className="ach-icon">
                    <img src={icon2} alt="Calves" />
                  </div>
                  <h2>0</h2>
                  <p>Calves</p>
                </div>

                <div className="ach-box yellow">
                  <div className="ach-icon">
                    <img src={icon3} alt="Pregnancy Stages" />
                  </div>
                  <h2>0</h2>
                  <p>Pregnancy Stages</p>
                </div>

                <div className="ach-box green">
                  <div className="ach-icon">
                    <img src={icon4} alt="Satisfied Farmers" />
                  </div>
                  <h2>200</h2>
                  <p>Satisfied Farmers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Products;
