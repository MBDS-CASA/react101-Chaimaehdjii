import { useState } from 'react'
import emsiLogo from './assets/logo-emsi-entry.png'
import profilePhoto from './assets/IMG-20250928-WA0011.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Photo profil en haut à droite */}
      <img
        src={profilePhoto}
        alt="Profile"
        className="profile-photo"
      />

      {/* Header */}
      <header className="header">
        <img src={emsiLogo} alt="Logo EMSI" className="emsi-logo" />
        <h1>Introduction à React</h1>
        <h2>A la découverte des premières notions de React</h2>
      </header>

      {/* Contenu principal */}
      <main className="main-content">
        <p>Ici, nous afficherons des informations interessantes :)</p>

        {/* Exemple du compteur (optionnel) */}
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Tous droits réservés - Chaimae Haddaji</p>
      </footer>
    </>
  )
}

export default App
