import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        
        <input
          onChange={this.handleInput}
          placeholder="Search"
          type="Search"
          name="search"
        />
      
    );
  }
}

export default SearchBar;
