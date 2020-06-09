import React from "react";
import Header from './Header';
import Messages from './Messages';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getMessages = this.getMessages.bind(this);
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

  render() {
    // this.getMessages();
    return (
      <div>
        <Header />

        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;