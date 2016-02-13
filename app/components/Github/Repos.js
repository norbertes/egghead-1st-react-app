import React from 'react';

let Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired,
  },
  render: function() {
    console.log(this.props.repos);
    const repos = this.props.repos.map( (repo, idx) => {
      return (
        <li className="list-group-item"
            key={idx}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.rescription}</p>}
        </li>
      );
    });

    return (
      <div>
        <h3>User Repos</h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
});

export default Repos;
