import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GiftsPage from './pages/GiftPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='gifts' element={<GiftsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
