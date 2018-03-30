import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'
import { Card, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import './PostContainer.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: this.props.post.likes
    }
  }

  clickHandler = () => {
    this.setState({
      liked: !this.state.liked
    });
    this.handleLikes();
  }

  handleLikes = () => {
    let likes = this.state.likes;
    this.state.liked ? likes-- : likes++;
    this.setState({likes: likes}); 
  }

  render() {

    let style = {
      color: '',
    }
    this.state.liked ? style['color'] = 'red' : style['color'] = ''

    return (
      <div>
          <Card className="mx-auto Post">
            <CardBody>
              <CardTitle>
              <div className='Post_User'>
                <img className="rounded-circle Post_Avatar" src={this.props.post.thumbnailUrl} alt='thumbnailUrl' />
                <div className='Post_Username'>{this.props.post.username}</div>
              </div>
              </CardTitle>
            </CardBody>
              <img width="100%" className='Post_Image' src={this.props.post.imageUrl} alt='imageUrl'/>
            <CardBody>
              <div className="Post_Body">
                <CardLink>
                  <div style={style} onClick={this.clickHandler}><i className="far fa-heart fa-lg"></i></div>
                </CardLink>
                <CardLink>
                 <i className="far fa-comment fa-lg"></i>
                 </CardLink>
              </div>
              <div className="Post_Body Post_Likes">
                <CardText>
                  {this.state.likes} Likes
                </CardText>
              </div>
              <div className="Post_Body Post_Comments">
              <CardText>
                <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp}/>
              </CardText>
              </div>
            </CardBody>
         </Card>
      </div>
    )
  }
}



export default PostContainer;