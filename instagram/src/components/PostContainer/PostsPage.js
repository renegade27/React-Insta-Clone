import React from 'react';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
import styled from 'styled-components';
import '../../App.css';

const Nav = styled.nav`
    width: 1140px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavIcon = styled.i`
    font-size: 65px; 
`;

const NavLittleIcon = styled.i`
    opacity: 0.5;
    width: 10%;
    font-size: 30px;
    cursor: pointer;
`;

const NavInput = styled.input`
    background-color: #cdd0d6;
    width: 20%;
    border: 0.5px solid rgb(0, 0, 0, 0.25);
    padding: 5px;
    font-size: 1.25rem;
`;

const NavText = styled.p`
    padding-left: 15px;
    border-left: 0.5px solid rgb(0,0,0, 0.6);
    margin-left: 0;
    font-weight: bolder;
    font-size: 2.8rem;
    margin-bottom: 0;
`;


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
        console.log(this.state.data);
        let newData = this.state.data.filter(post => post.username.includes(e.target.value));
        console.log(newData);
        this.setState({ filteredData : newData, search : e.target.value });
    }

    render() {
        if (localStorage.getItem(`commentsfortnite0`) === null || undefined) {
            dummyData.map(post => localStorage.setItem(`comments${post.id}`, JSON.stringify(post.comments)))
        }
        return (
        <div className="page-wrapper">
            <Nav>
                <NavIcon className="fab fa-instagram"></NavIcon>
                <NavText>Instagram</NavText>
                <NavInput
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.searchHandler}
                /> 
                <div className="nav-icons">
                    <NavLittleIcon className="far fa-compass"></NavLittleIcon>
                    <NavLittleIcon className="far fa-heart"></NavLittleIcon>
                    <NavLittleIcon onClick={() => {this.logout(this.props.logHandler)}} className="far fa-user"></NavLittleIcon>
                </div>
            </Nav>
            {console.log(this.state.filteredData)}
            {this.state.filteredData.length === 0 ? (<p className="loading">Loading...</p>) :
            (this.state.filteredData.map( post => { return <div className="post"> <PostContainer post={post} username={this.props.username} /> </div> } 
            ))};
        </div>
        );
    }
}

export default PostsPage;