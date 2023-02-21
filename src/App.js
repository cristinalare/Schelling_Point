import "./reset.css";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import InfoPage from "./pages/Info/InfoPage";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
          <Footer />
        </main>
      </ParallaxProvider>
    </>
  );
}

export default App;
