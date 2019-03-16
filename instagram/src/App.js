import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

console.log(dummyData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : []
    }
  }
  
  componentDidMount() {
    setTimeout(() => { this.setState(prevState => { return { data: dummyData }})},1000);
  }

  render() {
    return (
        <div className="page-wrapper">
          <nav>
            <i className="fab fa-instagram"></i>
          </nav>
          <>
            {this.state.data.length === 0 ? (<p>Loading...</p>) :
            (this.state.data.map( post => { return <div className="post"> <PostContainer post={post} /> </div> } 
            ))};
          </>
        </div>
      );
  }
}

export default App;
