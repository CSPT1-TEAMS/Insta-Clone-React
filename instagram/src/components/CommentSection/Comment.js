import React from 'react';

const Comment = (props) => {
  return (
    <div>
      { props.comments.map(comment => {
        <div>
          { comment }
        </div>
      })}
    </div>
  );
}

export default Comment;

