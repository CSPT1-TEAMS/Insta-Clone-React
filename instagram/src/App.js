import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'

import  dummyData  from './dummy-data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data : dummyData }
  }

  //componentDidMount() {
  //  this.setState({ data })
  //}

  render() {
    return (
      <div className="App">
	{this.state.data.map((post, i) => <PostContainer key={i} post={post}/>)}
      </div>
    );
  }
}

export default App;
