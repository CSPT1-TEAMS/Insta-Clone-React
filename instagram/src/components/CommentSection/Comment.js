import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comm: [],
      newComm: ''
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
      <div>
        {this.state.comm.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username} {comment.text}
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

