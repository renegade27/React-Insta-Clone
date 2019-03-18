import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

console.log(dummyData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      search : '',
      data : [],
      filteredData: []
    }
  }
  
  componentDidMount() {
    setTimeout(() => { this.setState(prevState => { return { data: dummyData, filteredData: dummyData }})},1000);
  }

  searchHandler = e => {
    this.setState({filteredData : this.state.data.filter(post => post.username.includes(e.target.value)), search : e.target.value});
  }

  render() {
    return (
        <div className="page-wrapper">
          <nav>
            <i className="fab fa-instagram"></i>
            <p>Instagram</p>
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.searchHandler}
            />
            <div className="nav-icons">
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </nav>
          {this.state.filteredData.length === 0 ? (<p>Loading...</p>) :
          (this.state.filteredData.map( post => { return <div className="post"> <PostContainer post={post} /> </div> } 
          ))};
        </div>
      );
  }
}

export default App;
