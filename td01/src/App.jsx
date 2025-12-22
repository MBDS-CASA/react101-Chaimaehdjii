import React, { useState, useEffect } from 'react';
import profilePhoto from './assets/IMG-20250928-WA0011.jpg';
import Header from './components/Header';
import Footer from './components/footer';
import NoteDetail from './components/NoteDetail';
import { getRandomItem } from './utils/randomItem';
import data from './data.json';
import './App.css';

function App() {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const randomNote = getRandomItem(data);
    setNote(randomNote);
  }, []);

  return (
    <>
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <Header />
      <main className="main-content">
        <h2>Note aléatoire :</h2>
        <NoteDetail note={note} />
      </main>
      <Footer />
    </>
  );
}

export default App;
