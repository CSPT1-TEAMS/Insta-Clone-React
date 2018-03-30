import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'

import PostContainer from './components/PostContainer/PostContainer'
import data from "./dummy-data"

class App extends Component {
    constructor() {
      super() 
      this.state = {
        data: []
      }
    }
    componentDidMount() {
      return this.setState({data:data})
    }
    
    render() {
    return (
      <div>
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
