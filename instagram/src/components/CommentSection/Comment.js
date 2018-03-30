import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comm: [],
      newComm: '',
      commStyles1: {
        fontWeight: 'bold',
        display: 'inline-block',
        clear: 'none'
      },
      commStyles2: {
        color: 'grey',
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ comm: this.props.comments, newComm: '' });
  }

  handleChange(event) {
    let newComm = event.target.value;
    this.setState ({ newComm: newComm });
  }

  handleSubmit(event) {
    event.preventDefault();
    let comm = this.state.comm;
    comm.push({ username: 'bhavik', text: this.state.newComm });
    this.setState({ comm: comm, newComm: ''});
  }

  render() {
    return (
      <div className="commentContainer">
        {this.state.comm.map((comment, i) => {
          return (
            <div key={i}>
              <div style={this.state.commStyles1}>{comment.username}</div> 
              <div style={this.state.commStyles2}>{comment.text}</div>
            </div>
          );
        })}
        <form onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Add a Comment..." onChange={ this.handleChange } 
                 value={ this.state.newComm } />
        </form>
      </div>
    );
  }
}

export default Comment;

