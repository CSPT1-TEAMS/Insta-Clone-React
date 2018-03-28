import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { PostContainer } from './components/PostContainer';

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
        {
          this.state.data.map(post => {
            <PostContainer post={ post } />
          })
        }
      </div>
    );
  }
}

export default App;
