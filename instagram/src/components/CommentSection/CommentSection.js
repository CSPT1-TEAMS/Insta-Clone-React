import React from 'react'

const CommentSection = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, i) => (
	<div key={i}>
	  <div className="comment-username">{comment.username}</div>
	  <div className="comment-text">{comment.text}</div>
	</div>
      ))}
    </div>
  )
}

export default CommentSection
