import React, { Component } from 'react';

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

    handleSubmit = () => {

    }

    handleChange = () => {
        
    }

    render() {
        console.log(this.state.comments);
        return (
            <div>
                {this.state.comments.map(comment => {
                    return (
                        <div>
                            {comment.username}
                            {comment.text}
                        </div>
                    )
                })}
                <div>{this.props.timestamp}</div>
                <div className='Comment_Form'>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder='Add a comment...' value={this.state.input} onChange={this.handleChange}/>
                    </form>
                </div>
            </div>
        )
    }

}

export default CommentSection;