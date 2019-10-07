import React from 'react';

class Search extends React.Component {

  searchRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;
    console.log(this.props, searchTerm, this.searchRef);
    this.props.handleSubmit(searchTerm);
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Ale, Hops, Lager, New..." />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
};

export default Search;
