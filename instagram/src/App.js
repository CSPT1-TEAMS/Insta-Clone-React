import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        {this.state.data.map((post, i) => {
            return <Post key={i} post={post} />
          })}
      </div>
    );
  }
}

export default App;
