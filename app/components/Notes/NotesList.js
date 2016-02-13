import React from 'react';

let NotesList = React.createClass({
  render: function() {
    let notes = this.props.notes.map( (note, idx) => {
        return <li className="list-group-item" key={idx}>{note['.value']}</li>;
    });

    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});


export default NotesList;
