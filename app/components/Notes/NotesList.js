import React from 'react';

class NotesList extends React.Component {
  render() {
    const { notes } = this.props;
    const notesList = notes.map( (note, idx) => (
        <li className="list-group-item" key={idx}>{note['.value']}</li>
    ));

    return (
      <ul className="list-group">
        {notesList}
      </ul>
    )
  }
}

export default NotesList;
