import React, { useState, useEffect } from 'react';


function MainContent() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Mise à jour chaque seconde

    return () => clearInterval(timer); // Nettoyage
  }, []);

  const options = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
  const jour = dateTime.toLocaleDateString('fr-FR', { weekday: 'long' });
  const mois = dateTime.toLocaleDateString('fr-FR', { month: 'long' });
  const annee = dateTime.getFullYear();
  const heure = dateTime.getHours().toString().padStart(2, '0');
  const minute = dateTime.getMinutes().toString().padStart(2, '0');
  const seconde = dateTime.getSeconds().toString().padStart(2, '0');

  return (
    <main className="main-content">
      <p>
        Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
      </p>
    </main>
  );
}

export default MainContent;
