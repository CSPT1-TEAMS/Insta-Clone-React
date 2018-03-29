import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { Card, CardImg, CardText, CardBody, CardLink,
         CardTitle, CardSubtitle } from 'reactstrap';
import './PostContainer.css';


const PostContainer = props => {
  return (
    <div>
        <Card className="mx-auto Post">
          <CardBody>
            <CardTitle>
            <div className='Post_User'>
              <img className="rounded-circle Post_Avatar" src={props.post.thumbnailUrl} alt='thumbnailUrl' />
              <div className='username'>{props.post.username}</div>
            </div>
            </CardTitle>
          </CardBody>
            <img width="100%" className='Post_Image' src={props.post.imageUrl} alt='imageUrl'/>
          <CardBody>
            <div className="Post_Body">
              <CardLink><i class="far fa-heart fa-2x"></i></CardLink>
              <CardLink><i class="far fa-comment fa-2x"></i></CardLink>
            </div>
            <div className="Post_Body">
              <CardText className="Post_Likes">
                {props.post.likes} Likes
              </CardText>
            </div>
            <div className="Post_Body">
            <CardText>
              <CommentSection comments={props.post.comments} timestamp={props.post.timestamp}/>
            </CardText>
            </div>
          </CardBody>
       </Card>
    </div>
  )
}

export default PostContainer;