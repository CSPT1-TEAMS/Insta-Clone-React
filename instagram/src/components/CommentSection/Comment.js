import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comm: [],
      newComm: ''
    }
  }

  componentDidMount() {
    this.setState({ comm: this.props.comments, newComm: '' });
  }

  render() {
    return (
      <div>
        {this.state.comm.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username} {comment.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;

