import React from "react";
 

function NoteDetail({ note }) {
  if (!note) return <p>Aucune note à afficher</p>;

  return (
    <div className="note-card">
      <h3>{note.course}</h3>
      <p>
        Étudiant: {note.student.firstname} {note.student.lastname} (ID: {note.student.id})
      </p>
      <p>Date: {note.date}</p>
      <p>Note: {note.grade}</p>
    </div>
  );
}

export default NoteDetail;
