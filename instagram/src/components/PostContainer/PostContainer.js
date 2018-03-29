import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
	<div>
	  <img src={this.props.post.thumbnailUrl} />
	  <div>{this.props.post.username}</div>
	</div>
	<div>
	  <img src={this.props.post.imageUrl} />
	</div>
	<div>{this.props.post.likes} likes</div>
      
	<CommentSection
	  comments={this.props.post.comments}
	  saveComment={this.props.saveComment}
	  postId={this.props.postId}
	  />
      </div>
    )
  }
}

export default PostContainer
