import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Footer from './mainpage/Footer';
import Header from './mainpage/Header';
import MainProject from './mainpage/MainProject';
import About from './mainpage/About';

// import Project from './Project';
// main page
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: 'all',
      name: '',
      email: '',
      message: '',
      invalid: false,
      init: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // reset invalid when user close the contact menu
  handleResetInvalid = () => {
    this.setState({
      invalid: false,
      init: true,
    });
  };
  handleTag = e => {
    this.setState({
      tags: e,
    });
  };
  handleContact = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  async handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      // form is invalid! so we do nothing
      this.setState({
        invalid: true,
        init: false,
      });
      return;
    }
    this.setState({
      init: false,
      invalid: false,
    });
    const { name, email, message } = this.state;

    // await axios.get('https://salty-wave-48191.herokuapp.com/test').then(res => {
    //   console.log(res);
    // });

    await axios
      .post('https://salty-wave-48191.herokuapp.com/send', {
        name,
        email,
        message,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
    this.setState({
      name: '',
      email: '',
      message: '',
      invalid: false,
      init: true,
    });
  }
  render() {
    return (
      <div className="container">
        <Nav
          handleSubmit={this.handleSubmit}
          handleContact={this.handleContact}
          handleResetInvalid={this.handleResetInvalid}
          invalid={this.state.invalid}
          init={this.state.init}
          name={this.state.name}
        />
        <Header />
        <About />
        <MainProject tags={this.state.tags} handleTag={this.handleTag} />
        <Footer />
      </div>
    );
  }
}

export default App;
