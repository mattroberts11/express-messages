import React from 'react';

const MessageList = (props) => {
  console.log(props);
  return(
    <div>
    <h3>{props.message.title}</h3>
    <p><strong>Message:</strong> {props.message.body}</p>
    </div>
  )
}

export default MessageList;