import React from 'react';

const NotesList = ({notes}) => {
  const notesList = notes.map((note, idx) => (
    <li className="list-group-item" key={idx}>{note}</li>
  ));

  return (
    <ul className="list-group">
      {notesList}
    </ul>
  )
};

export default NotesList;
