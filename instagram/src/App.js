import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    }
    console.log(this.state.dummyData);
  }
  
  render() {
    return (
        <div className="page-wrapper">
          { this.state.dummyData.map( post => { return <div className="post"> <PostContainer post={post} /> </div> } 
          )};
        </div>
      );
  }
}

export default App;
