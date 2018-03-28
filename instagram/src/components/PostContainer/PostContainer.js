import React, { Component } from 'react';
// import CommentSection from './'

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const post = this.props.post;
        console.log(this.props.post);
        return (
            <div>
                <div></div>

                <div>
                    <img src={post.thumbnailUrl} alt='thumbnailUrl' />
                    <div className='username'>{post.username}</div>
                </div>

                <div>
                    <img src={post.imageUrl} alt='imageUrl' />
                </div>




            </div>
        )
    }

}

export default PostContainer;