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
  const [dateTime, setDateTime] = useState(new Date());

  // Générer une note aléatoire
  const generateRandomNote = () => {
    const randomNote = getRandomItem(data);
    setNote(randomNote);
  };

  // Mettre à jour l'heure toutes les secondes
  useEffect(() => {
    generateRandomNote(); // première note
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  // Format de la date et heure
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const jour = jours[dateTime.getDay()];
  const moisTexte = mois[dateTime.getMonth()];
  const annee = dateTime.getFullYear();
  const heure = String(dateTime.getHours()).padStart(2, '0');
  const minute = String(dateTime.getMinutes()).padStart(2, '0');
  const seconde = String(dateTime.getSeconds()).padStart(2, '0');

  return (
    <>
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
        {/* Texte de TD02 */}
        <p>
          Bonjour, on est le {jour}, {moisTexte}, {annee} et il est {heure}:{minute}:{seconde}
        </p>

        {/* Note aléatoire */}
        <h2>Note aléatoire :</h2>
        <NoteDetail note={note} />
        <button onClick={generateRandomNote} className="new-note-btn">
          Nouvelle note
        </button>
      </main>

      <Footer year={annee} prenom="chaimae" nom="haddaji" />
    </>
  );
}

export default App;
