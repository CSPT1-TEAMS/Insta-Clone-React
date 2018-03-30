import React, { Component } from 'react'
import Image from 'react-image-resizer';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  handleChange = e => {
    const term = e.target.value
    this.setState({ term })
    this.props.filterPosts(term)
  }

  render() {
    return (
      <div class="row">
      <nav class="searchbar-wrapper">
        <div class="row ">
          <div class="col-2 logos">
            <Image 
              className="instaicon" 
              src={require('./download.png')}
              height={75}
              width={75}
              />
          </div>
          <div class="col-2 logos">
            <Image 
              className="instalogo" 
              src={require('./Instagram_logo.png')}
              height={100}
              width={100}
              />
          </div>
          <div class="col-6 searchbar">
            <input
              onChange={this.handleChange}
              
              type="text"
              placeholder="🔍Search"
              value={this.state.term}
              />
          </div>
          <div class="col-4 icons">
    {/* <img src={require('./Instagram_logo.png')}/> */}
    </div>
    </div>
      </nav>
    </div>
    )
  }
}

export default SearchBar
