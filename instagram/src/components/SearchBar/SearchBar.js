import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

    handleChange = (e) => {
      this.setState({search: e.target.value});
    } 

    render() {
      return (
        <nav>
          <div className='Nav_Logo'>
            <i class="fab fa-instagram"></i>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png" />
          </div>
    
          <div className='Nav_Form'>
            <form>
              <input placeholder='Search' value={this.state.search} onChange={this.handleChange} />
            </form>
          </div>
    
          <div className='Nav_Buttons'>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
          </div>
        </nav>
      )
    }


}

export default SearchBar;