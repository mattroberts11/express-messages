import React from 'react';

const MessageList = (props) => {
  // console.log('MessageList props =', props);

  return(
    <div id={props.message._id}>
      <h3>{props.message.title}</h3>
      <p><strong>Message:</strong> {props.message.body}</p>
      <form action='/api/messages/'>
      <button>Delete Message</button>
      </form>
    </div>
  )
}

export default MessageList;