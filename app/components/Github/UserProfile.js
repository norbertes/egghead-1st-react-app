import React from 'react';

let UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      <div>
        User profile component {this.props.username}
        <p>{this.props.bio.name}</p>
      </div>
      )
  }
});

export default UserProfile;
