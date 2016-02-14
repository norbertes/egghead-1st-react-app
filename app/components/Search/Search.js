import React from 'react';

class Search extends React.Component {
  setRef(userName) {
    this.userNameRef = userName;
  }

  handleSubmit() {
    let username = this.userNameRef.value;
    this.userNameRef.value = '';
    this.props.history.pushState(null, `/profile/${username}`);
  }

  render() {
    return (
      <div className="col-xs-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text"
                   ref={this.setRef.bind(this)}
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
}

Search.propTyes = {
  history: React.PropTypes.object.isRequired,
};

export default Search;
