import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn:''
    }
  }

  componentDidMount() {
    localStorage.setItem('loggedin', false);
    this.setState({isLoggedIn:localStorage.getItem('loggedin')});
  }

  userChange = value => {
    localStorage.setItem('loggedin', (value==="true"?"false":"true"));
    this.setState({isLoggedIn:(value==="true"?"false":"true")});
  }

  render() {
    return (
      <>
          <ComponentFromWithAuthenticate isLoggedIn={this.isLoggedIn} userChange={this.userChange}/>
      </>
      );
  }
}

export default App;
