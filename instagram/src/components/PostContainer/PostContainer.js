import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({ post }) => {
  return (
    <div>
      <CommentSection comments={post.comments}/>
    </div>
  )
}

export default PostContainer
