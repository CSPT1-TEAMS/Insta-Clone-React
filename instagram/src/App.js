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
      data: [],
      filter: null
    }
  }
  
  componentDidMount() {
    this.setState({data: dummyData});
  }

  getFilter = (result) => {
    this.setState({filter: result});
  }

  render() {
    console.log(this.state.filter);

    return (
      <div className="App">
      <SearchBar getFilter={this.getFilter} />
      {this.state.filter ?
        this.state.data.filter((post, i) => {
          return post.username === this.state.filter
        }).map((post, i) => {
          return <PostContainer post={post} key={i} />
        }) : this.state.data.map((post, i) => {
          return <PostContainer post={post} key={i} />
        })}
      </div>
    );
  }
}

export default App;
