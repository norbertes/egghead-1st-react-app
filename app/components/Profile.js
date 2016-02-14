import React from 'react';
import { Router } from 'react-router';

import Notes from '../components/Notes/Notes';
import Repos from '../components/Github/Repos';
import UserProfile from '../components/Github/UserProfile';

import Rebase from 're-base';
//import ReactFireMixin from 'reactfire';

import getGithubInfo from '../utils/helpers';

const base = Rebase.createClass('https://brilliant-fire-8091.firebaseio.com/')

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }

  init(username) {

    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    });

    getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      });
  }

  componentDidMount() {
    this.init(this.props.params.userName);
  }

  componenWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.userName);
  }

  handleAddNote(newNote) {
    // update firebase /w new note
    base.post(this.props.params.userName, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.userName}
                       bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.userName}
                 repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.userName}
                 notes={this.state.notes}
                 addNote={this.handleAddNote.bind(this)}/>
        </div>
      </div>
    )
  }
}


export default Profile;

