import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'
import moment from 'moment'
import './PostContainer.css'

class PostContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleLikeClick = e => {
    e.preventDefault()
    this.props.incrementLikes(this.props.postId)
  }

  render() {
    return (
      <div className="post-wrapper">

	<div className="post-user">
	  <img className="post-user-thumbnail" src={this.props.post.thumbnailUrl} alt="" />
	  <div className="post-user-username username">{this.props.post.username}</div>
	</div>
	<div className="post-image">
	  <img src={this.props.post.imageUrl} alt="" />
	</div>

	<div className="post-likes">
	  <a
	    className="heart"
	    onClick={this.handleLikeClick}
	    href="">
	    ♥
	  </a>
	  {this.props.post.likes} likes
	</div>
      
	<CommentSection
	  comments={this.props.post.comments}
	  saveComment={this.props.saveComment}
	  postId={this.props.postId}
	  />

	<div className="post-timestamp">
	  {moment(this.props.post.timestamp).fromNow()}
	</div>

      </div>
    )
  }
}

export default PostContainer
