import './reset.css';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  return (
    <>
      <ParallaxProvider>
        <Header/>
        <main>
          <Home />
          <Footer />
        </main>
      </ParallaxProvider>
    </>
  );
}

export default App;
