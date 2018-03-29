import React from 'react';
import Comment from '../CommentSection/Comment';

const Post = props => {

        return(
            <div>
                <div>
                    <img src={props.post.thumbnailUrl} alt="thumbnailUrl" />
                    <div className="userName">{props.post.username}</div>
                </div>

                <img src={props.post.imageUrl} alt="imageUrl" />
                <div>{props.post.likes} likes</div>
                <Comment comments={props.post.comments} />
            </div>
        );
    }


export default Post;
