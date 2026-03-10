import React from "react";
import "./VideoGallery.css";

// ✅ HERO IMAGE
import heroBg from "../assets/gallery/gallery-hero.jpg";

// ✅ IMPORT YOUR 9 VIDEOS (random)
import v1 from "../assets/videos/1.mp4";
import v2 from "../assets/videos/2.mp4";
import v3 from "../assets/videos/3.mp4";
import v4 from "../assets/videos/4.mp4";
import v5 from "../assets/videos/5.mp4";
import v6 from "../assets/videos/6.mp4";
import v7 from "../assets/videos/7.mp4";
import v8 from "../assets/videos/8.mp4";
import v9 from "../assets/videos/9.mp4";

const videoList = [v1, v2, v3, v4, v5, v6, v7, v8, v9];

function VideoGallery() {
  return (
    <>
      {/* ===== HERO ===== */}
      <div
        className="page-header"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="page-header-overlay">
          <div className="container text-center">
            <h1>Video Gallery</h1>
            <p>Home / Pages / Gallery</p>
          </div>
        </div>
      </div>

      {/* ===== VIDEO GRID ===== */}
      <section className="video-gallery-section">
        <div className="video-grid">
          {videoList.map((video, index) => (
            <div className="video-card" key={index}>
              <video controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default VideoGallery;
