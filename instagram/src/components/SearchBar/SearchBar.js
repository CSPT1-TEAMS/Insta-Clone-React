import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <div>
        <input
          onChange={this.handleInput}
          placeholder="Search"
          type="Search"
          name="search"
        />
      </div>
    );
  }
}

export default SearchBar;
