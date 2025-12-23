import React, { useState, useEffect } from 'react';
import profilePhoto from './assets/IMG-20250928-WA0011.jpg';
import Header from './components/Header';
import Footer from './components/footer';
import NoteDetail from './components/NoteDetail';
import MenuContent from './components/MenuContent';
import { getRandomItem } from './utils/randomItem';
import data from './data/data.json';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [note, setNote] = useState(() => getRandomItem(data)); // Initialize with random note
  const [dateTime, setDateTime] = useState(new Date());

  // Générer une note aléatoire
  const generateRandomNote = () => {
    const randomNote = getRandomItem(data);
    setNote(randomNote);
  };

  // Mettre à jour l'heure toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Liste des éléments du menu
  const menuItems = ['Notes', 'Étudiants', 'Matières', 'À propos'];

  // Thème sombre pour Material UI
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#8e44ad',
      },
      background: {
        default: '#1a1a1a',
        paper: '#2b0033',
      },
    },
  });

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
            </li>
            {menuItems.map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <Header />
        <main className="main-content">
          {/* Texte de TD02 - toujours visible */}
          <p>
            Bonjour, on est le {jour}, {moisTexte}, {annee} et il est {heure}:{minute}:{seconde}
          </p>

          <Routes>
            <Route path="/" element={
              <div>
                {/* Note aléatoire */}
                <h2>Note aléatoire :</h2>
                <NoteDetail note={note} />
                <button onClick={generateRandomNote} className="new-note-btn">
                  Nouvelle note
                </button>
              </div>
            } />
            <Route path="/notes" element={
              <div>
                <MenuContent activeMenu="Notes" data={data} />
              </div>
            } />
            <Route path="/étudiants" element={
              <div>
                <MenuContent activeMenu="Étudiants" data={data} />
              </div>
            } />
            <Route path="/matières" element={
              <div>
                <MenuContent activeMenu="Matières" data={data} />
              </div>
            } />
            <Route path="/à-propos" element={
              <div>
                <MenuContent activeMenu="À propos" data={data} />
              </div>
            } />
          </Routes>
        </main>

        <Footer year={annee} prenom="chaimae" nom="haddaji" />
      </>
    </ThemeProvider>
  );
}

export default App;
