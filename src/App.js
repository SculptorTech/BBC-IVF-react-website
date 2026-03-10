import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Services1 from "./components/Pages/Services1";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Products from "./components/Products";
import Team from "./components/Team";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Gallery1 from "./components/Gallery1";
import VideoGallery from "./components/VideoGallery";
import Footer from "./components/Footer";

import "./App.css";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Services />
              <About showHero={false} showTeam={false} />
              <Achievements />
              <Products showHero={false} showFull={false} />
              <Team />
            </Layout>
          }
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={
            <Layout>
              <Services1 />
            </Layout>
          }
        />
        <Route
          path="/services1"
          element={
            <Layout>
              <Services1 />
            </Layout>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <Layout>
              <About showHero={true} showTeam={true} />
            </Layout>
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <Layout>
              <Products showHero={true} />
            </Layout>
          }
        />

        {/* TEAM */}
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery1 />
            </Layout>
          }
        />

        <Route
          path="/video-gallery"
          element={
            <Layout>
              <VideoGallery />
            </Layout>
          }
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={
            <Layout>
              <Careers />
            </Layout>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* SAFETY */}
        <Route
          path="/Gallery"
          element={
            <Layout>
              <Gallery1 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
