import React, { Component } from 'react'
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props) {
        super(props)
     
    }
    
    render() {
        console.log('comment',this.props.comments[0] ? this.props.comments[0].username : '' )
        // console.log('Props',this.props)
        //console.log('Post', this.props.data[0] ? this.props.data[0].thumbnailUrl : '')
        return (
            <div>
                <ul>

                    <li> <h4>{this.props.comments[0] ? this.props.comments[0].username : ''} </h4> 
                     <p>{this.props.comments[0] ? this.props.comments[0].text : ''}</p></li>
                     </ul>
                
            </div>
        )
    }
}

export default CommentSection