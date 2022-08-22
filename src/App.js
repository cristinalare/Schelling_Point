import './reset.css';
import './App.css';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  return (
    // <Router>
      <>
        <ParallaxProvider>
          <Header/>
          <main>
            <Home />
            <Footer />
          </main>
          {/* <Routes>
            <Route path="/past-events" element={<PastEvents /> } />
            <Route path="/" element={ <Home />} />
          </Routes> */}
        </ParallaxProvider>
      </>
    // </Router>
  );
}

export default App;
