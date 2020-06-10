import React from "react";
import Header from './Header';
import Messages from './Messages';
import MessageList from './MessageList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount(){
    this.getMessages();
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  getMessages(){
    fetch('http://127.0.0.1:3000/api/messages')
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(msg => this.setState({messages: msg}))
      .catch((err) => console.log('Error = ', err))
  }

  postMessage(){
    fetch('http://127.0.0.1:3000/api/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        title: 'Title',
        body: this.state.value
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({value: ''});
      // console.log('Success: ', this.state.value);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
  }

  deleteMessage() {
    fetch('http://127.0.0.1:3000/api/messages', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      // body:JSON.stringify({
      //   title: 'Title',
      //   body: this.state.value
      // })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({value: ''});
      // console.log('Success: ', this.state.value);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
  }

  render() {
    // this.getMessages();
    return (
      <div>
        <Header />

        <form>
          <textarea
            value={this.state.value}
            cols="50"
            rows="4"
            name="body"
            onChange={this.handleChange}>
          </textarea>
        </form>
        <button type="submit" onClick={this.postMessage}>Post</button>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;