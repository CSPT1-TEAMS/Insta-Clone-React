import React, { Component } from 'react'
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.saveComment({
      username: 'Victor',
      text: this.state.text
    }, this.props.postId)

    this.setState({ text: '' })
  }

  handleChange = event => {
    const comment = event.target.value
    this.setState({ text: comment })
  }

  render() {
    return (
      <div>
	{this.props.comments.map((comment, i) => (
	  <div key={i} className="comment-wrapper">
	    <div className="comment-username">{comment.username}</div>
	    <div className="comment-text">{comment.text}</div>
	  </div>
	))}

	<form onSubmit={this.handleSubmit}>
	  <input
            className="comment-input"
            onChange={this.handleChange}
            type="text"
            value={this.state.text}
            placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
}

export default CommentSection
