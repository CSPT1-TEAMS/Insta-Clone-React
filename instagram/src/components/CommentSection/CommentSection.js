import React, { Component } from 'react';
import './CommentSection.css';
import moment from 'moment'

class CommentSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: [],
        input: ''
      }
    }

    componentDidMount() {
      this.setState({
        comments: this.props.comments,
        input: ''
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const comments = this.state.comments;
      const newComment = {
        username: 'alexbotello',
        text: this.state.input,
      }
      comments.push(newComment);
      this.setState({
        comments: comments,
        input: '',
      });

    }

    handleChange = (e) => {
      const input = e.target.value;
      this.setState({
        input: input,
      });
        
    }

    render() {
        return (
          <div className="Comments">
            {this.state.comments.map(comment => {
              return (
                <div className="Comments_Text">
                  <div className="Comments_User">
                  {comment.username}&nbsp;&nbsp;
                  </div>
                    {comment.text}
                </div>
              )
            })}
            <div className="Comments_Text">{moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</div>
            <div className='Comments_Text'>
              <form className="Comments_Form"onSubmit={this.handleSubmit}>
                <input
                  className="Comments_Input"
                  placeholder='Add a comment...' 
                  value={this.state.input} 
                  onChange={this.handleChange}
                />
              </form>
            </div>
          </div>
        )
    }

}

export default CommentSection;