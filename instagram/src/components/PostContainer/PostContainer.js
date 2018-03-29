import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { Card, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import './PostContainer.css';


const PostContainer = props => {
  return (
    <div>
        <Card className="mx-auto Post">
          <CardBody>
            <CardTitle>
            <div className='Post_User'>
              <img className="rounded-circle Post_Avatar" src={props.post.thumbnailUrl} alt='thumbnailUrl' />
              <div className='Post_Username'>{props.post.username}</div>
            </div>
            </CardTitle>
          </CardBody>
            <img width="100%" className='Post_Image' src={props.post.imageUrl} alt='imageUrl'/>
          <CardBody>
            <div className="Post_Body">
              <CardLink>
                <i className="far fa-heart fa-lg"></i>
              </CardLink>
              <CardLink>
               <i className="far fa-comment fa-lg"></i>
               </CardLink>
            </div>
            <div className="Post_Body Post_Likes">
              <CardText>
                {props.post.likes} Likes
              </CardText>
            </div>
            <div className="Post_Body Post_Comments">
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