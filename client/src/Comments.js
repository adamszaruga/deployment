import React from 'react';

let Comments = ({comments})=> {

  return comments.map(comment => (
    <div key={comment.id} >
      <h1>{comment.text}</h1>
      <p>{comment.createdAt}</p>
      <hr />
    </div>
  ));
  
}

export default Comments;
