import React from 'react';
import { Router } from 'react-router';

import Notes from '../components/Notes/Notes';
import Repos from '../components/Github/Repos';
import UserProfile from '../components/Github/UserProfile';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

const Profile = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Dummy name'
      },
      repos: ['a', 'b', 'c']
    }
  },

  componentDidMount: function() {
    this.ref = new Firebase('https://brilliant-fire-8091.firebaseio.com/');
    let childRef = this.ref.child(this.props.params.userName);
    this.bindAsArray(childRef, 'notes');
  },

  componenWillUnmount: function() {
    this.unbind('notes');
  },

  handleAddNote: function (newNote) {
    // update firebase /w new note
    this.ref.child(this.props.params.userName)
            .child(this.state.notes.length)
            .set(newNote)
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.userName}
                       bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.userName}
                 repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.userName}
                 notes={this.state.notes}
                 addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});


export default Profile;

