import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.post);
        return (
            <div>
                <div className='Post_User'>
                    <img src={this.props.post.thumbnailUrl} alt='thumbnailUrl' />
                    <div className='username'>{this.props.post.username}</div>
                </div>

                <img className='Post_Image' src={this.props.post.imageUrl} alt='imageUrl' />

                <div className='Post_Buttons'>
                  <i class="far fa-heart"></i>
                  <i class="far fa-comment"></i>
                </div>
                <div className='Post_Likes'>{this.props.post.likes} Likes</div>

                <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp}/>
            </div>
        )
    }

}

export default PostContainer;