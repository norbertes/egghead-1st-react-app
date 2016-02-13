import React from 'react';
import { History } from 'react-router';

const Search = React.createClass({
  mixins: [History],
  setRef: function (userName) {
    this.userNameRef = userName;
  },
  handleSubmit: function () {
    let username = this.userNameRef.value;
    this.userNameRef.value = '';
    this.history.pushState(null, `profile/${username}`);
  },
  render: function () {
    return (
      <div className="col-xs-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text"
                   ref={this.setRef}
            />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    );
  }
});

export default Search;
