import React from 'react';

function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {annee} - Chaimae.Haddaji, Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;

