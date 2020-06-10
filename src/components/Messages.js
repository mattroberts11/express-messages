import React from 'react';
import MessageList from './MessageList';

const Messages = (props) => {
  // console.log(props);
  return (
    <div>
    <h2>Messages will go here.</h2>

    {
        props.messages.map( (msg, i) => (
          <MessageList
            message={msg}
            key={i}
          />
          )
        )
    }
    </div>
  )
}

export default Messages;