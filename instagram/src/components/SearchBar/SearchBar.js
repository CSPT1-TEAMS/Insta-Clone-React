import React, { Component } from 'react'

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
      <div className="searchbar-wrapper">
	<input
	  onChange={this.handleChange}
	  className="searchbar"
	  type="text"
	  placeholder="🔍Search"
	  value={this.state.term}
	  />
      </div>
    )
  }
}

export default SearchBar
