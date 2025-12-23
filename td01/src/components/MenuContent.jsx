import React from 'react';

function MenuContent({ activeMenu }) {
  return (
    <div className="menu-content">
      <h2>{activeMenu}</h2>
      <p>Contenu pour {activeMenu}</p>
    </div>
  );
}

export default MenuContent;