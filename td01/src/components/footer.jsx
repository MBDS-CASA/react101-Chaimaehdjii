function Footer({ year, prenom, nom }) {
  return (
    <footer className="footer">
      © {year} - {prenom}.{nom}, Tous droits réservés.
    </footer>
  );
}

export default Footer;
