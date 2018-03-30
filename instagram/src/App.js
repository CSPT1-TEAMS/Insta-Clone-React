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
      filteredData: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData, filteredData: dummyData })
  }

  saveComment = (comment, postId) => {
    const data = this.state.data.map((post, i) => {
      if (i === postId) {
	return { ...post, comments: [...post.comments, comment ]}
      } else return post
    })

    const filteredData = this.state.filteredData.map((post, i) => {
      if (i === postId) {
	return { ...post, comments: [...post.comments, comment ]}
      } else return post
    })

    this.setState({ data, filteredData })
  }

  incrementLikes = postId => {
    const data = this.state.data.map((post, i) => {
      if (i === postId) {
	return { ...post, likes: post.likes + 1 }
      } else return post
    })
    const filteredData = this.state.filteredData.map((post, i) => {
      if (i === postId) {
	return { ...post, likes: post.likes + 1 }
      } else return post
    })
    this.setState({ data: data, filteredData: filteredData })
  }

  filterPosts = text => {
    const filtered = this.state.data.filter(post => post.username.includes(text))
    this.setState({ filteredData: filtered })
  }

  render() {
    return (
      <div className="App container">
	<SearchBar filterPosts={this.filterPosts} />
	{this.state.filteredData
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
