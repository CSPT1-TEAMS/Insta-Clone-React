import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: []}
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  saveComment = (comment, postId) => {
    //const newState = this.state.map((post, i) => {
    //  if (i === postId)
    //})
    console.log('post id: ', postId)
    console.log('comment: ', comment)


  }

  render() {
    return (
      <div className="App">
	{this.state.data.map((post, i) => (
	  <PostContainer
	    saveComment={this.saveComment}
	    key={i}
	    postId={i}
	    post={post}
	    />
	))}
      </div>
    );
  }
}

export default App;
