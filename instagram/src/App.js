import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/SearchBar';
import { Grid } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      appStyle: {
        color: 'blue'
      }
    }
  }
  

  componentDidMount() {
    this.setState({data: dummyData});
  }
  

  render() {
    
    console.log(this.state.data);
    return (
      <Grid>
          <SearchBar />
        {this.state.data.map((post, i) => {
            return <Post key={i} post={post} />
          })}
      </Grid>
    );
  }
}

export default App;
