import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({ post }) => {
  return (
    <div>
      <div>
        <img src={post.thumbnailUrl} />
        <div>{post.username}</div>
      </div>
      <div>
        <img src={post.imageUrl} />
      </div>
      <div>{post.likes} likes</div>
      
      <CommentSection comments={post.comments}/>
    </div>
  )
}

export default PostContainer
