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

  // Fonction pour choisir une note aléatoire
  const generateRandomNote = () => {
    const randomNote = getRandomItem(data);
    setNote(randomNote);
  };

  useEffect(() => {
    generateRandomNote(); // Générer la première note au chargement
  }, []);

  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <>
      {/* Menu vertical flottant à gauche */}
      <nav className="menu">
        <ul>
          {['Notes', 'Étudiants', 'Matières', 'À propos'].map((item) => (
            <li key={item} onClick={() => handleMenuClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <Header />
      <main className="main-content">
        <h2>Note aléatoire :</h2>
        <NoteDetail note={note} />

        {/* Bouton pour générer une nouvelle note */}
        <button onClick={generateRandomNote} className="new-note-btn">
          Nouvelle note
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
