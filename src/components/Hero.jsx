import { useEffect, useRef, useState } from "react";
import "./Hero.css";

import slide1 from "../assets/images/hero1.jpg";
import slide2 from "../assets/images/hero2.jpg";
import slide3 from "../assets/images/hero3.jpg";
import heroVideo from "../assets/video/Documentry Vid.mp4";

const slides = [
  { type: "image", src: slide1, title: "Creating Miracles Every Day", subtitle: "Welcome to BBC IVF Center" },
  { type: "image", src: slide2, title: "Advanced IVF Technology", subtitle: "For Better Cattle Genetics" },
  { type: "image", src: slide3, title: "Trusted by Farmers", subtitle: "Across Maharashtra & India" },
  { type: "video", src: heroVideo, title: "State-of-the-Art Infrastructure", subtitle: "Experience Our Advanced Facilities" },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Slide change logic
  useEffect(() => {
    const currentSlide = slides[currentIndex];

    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (currentSlide.type === "image") {
      // Auto next slide after 10s for images
      timeoutRef.current = setTimeout(goToNextSlide, 10000);
    } else if (currentSlide.type === "video" && videoRef.current) {
      const video = videoRef.current;
      video.playbackRate = 1.0; // normal speed
      video.currentTime = 0;
      video.play().catch(() => {});

      // Move to next slide after video ends
      const handleEnded = () => goToNextSlide();
      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    goToNextSlide();
  };

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === currentIndex ? "active" : ""}`}>
          {slide.type === "image" ? (
            <div className="hero-media" style={{ backgroundImage: `url(${slide.src})` }}></div>
          ) : (
            index === currentIndex && (
              <video
                ref={videoRef}
                className="hero-video"
                src={slide.src}
                muted
                loop={false}
                playsInline
              />
            )
          )}

          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-subtitle">{slide.subtitle}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">
                Advanced bovine genetics, IVF solutions, and breeding excellence trusted by farmers and institutions across India.
              </p>
            </div>
          </div>
        </div>
      ))}

      <button className="carousel-control prev" onClick={prevSlide}>‹</button>
      <button className="carousel-control next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Hero;
