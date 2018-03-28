import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
        {this.state.data.map((post, i) => {
          return <PostContainer post={post} key={i} />
        })}
      </div>
    );
  }
}

export default App;
