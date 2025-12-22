import { useState } from 'react';
import profilePhoto from './assets/IMG-20250928-WA0011.jpg';
import Header from './components/Header';
import Footer from './components/footer';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <>
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
