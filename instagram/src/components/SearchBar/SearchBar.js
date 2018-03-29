import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted:', e)
  }

  handleChange = e => {
    const term = e.target.value
    this.setState({ term })
  }

  render() {
    return (
      <div className="searchbar-wrapper">
	<form
	  onSubmit={this.handleSubmit}
	  className="searchbar-form">
	  <input
	    onChange={this.handleChange}
	    className="searchbar"
	    type="text"
	    placeholder="🔍Search"
	    value={this.state.term}
	    />
	</form>
      </div>
    )
  }
}

export default SearchBar
