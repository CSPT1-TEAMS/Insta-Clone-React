import React, {Component} from 'react';
import { Glyphicon, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './PostContainer.css';
// import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    console.log('PostContainer', props)
    console.log('Post', props.data[0] ? props.data[0].thumbnailUrl : '')
    return (
        <div className="post">
            <div className="header">
                <img className="thumbNail" src={props.data[0] ? props.data[0].thumbnailUrl : ''} alt="thumb"/>
                <div className="userName"> {props.data[0] ? props.data[0].username : ''}</div>
            </div>
            <div>
            <img className="image" src={props.data[0] ? props.data[0].imageUrl : ''} alt="image"/>
            </div>
            <div className="comment">
            <CommentSection props={props} />
            </div>
        </div>

    )
}
// PostContainer.PropTypes = {
//     data: PropTypes.Array
// }


export default PostContainer