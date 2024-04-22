import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/footer';
import Contact from './components/Contact';
import React, { useTransition } from 'react';
import { UseTranslation } from 'react-i18next';
import i18n from './i18n/i18n';
import { useEffect, useState } from 'react';

function App() {
  const {t, i18n}= useTransition();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  }

  return (
    <div className="App dark:bg-gray-950 overflow-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;