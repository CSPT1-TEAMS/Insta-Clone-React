import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filterText: ''
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  saveComment = (comment, postId) => {
    const data = this.state.data.map((post, i) => {
      if (i === postId) {
	return { ...post, comments: [...post.comments, comment ]}
      } else return post
    })
    this.setState({ data })
  }

  incrementLikes = postId => {
    const data = this.state.data.map((post, i) => {
      if (i === postId) {
	return { ...post, likes: post.likes + 1 }
      } else return post
    })
    this.setState({ data })
  }

  filterPosts = text => {
    this.setState({ filterText: text })
  }

  render() {
    return (
      <div className="App container">
	<SearchBar filterPosts={this.filterPosts} />
	{this.state.data
	  .map((post, i) => (
	    <PostContainer
	      saveComment={this.saveComment}
	      incrementLikes={this.incrementLikes}
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
