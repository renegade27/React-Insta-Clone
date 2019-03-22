import React from 'react';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data'
import '../../App.css';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.logHandler=this.props.logHandler;
        this.state = {
            search:'',
            data:[],
            filteredData:[]
        }
    }

    componentDidMount() {
        this.setState({ data: dummyData, filteredData: dummyData, });
    }

    logout(callback) {
        callback();
    }

    searchHandler = e => {
        this.setState({filteredData : this.state.data.filter(post => post.username.includes(e.target.value)), search : e.target.value});
    }

    render() {
        if (localStorage.getItem(`commentsfortnite0`) === null || undefined) {
            dummyData.map(post => localStorage.setItem(`comments${post.id}`, JSON.stringify(post.comments)))
        }
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
                    <i onClick={() => {this.logout(this.props.logHandler)}} className="far fa-user"></i>
                </div>
            </nav>
            {this.state.filteredData.length === 0 ? (<p className="loading">Loading...</p>) :
            (this.state.filteredData.map( post => { return <div className="post"> <PostContainer post={post} username={this.props.username} /> </div> } 
            ))};
        </div>
        );
    }
}

export default PostsPage;