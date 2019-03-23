import React from 'react';
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : props.username,
            post : props.post
        }
    }


    render() {
        console.log(this.props);
        return (
            <>
            {console.log(this.props)}
                <div className="post-content">
                    <div className="content-row">
                        <img alt="usrbadge"src={this.state.post.thumbnailUrl} className="user-badge">
                        </img>
                        <p className="username"> {this.state.post.username}</p>
                    </div>
                    <img alt="pstimg" className="post-image" src={this.state.post.imageUrl}>
                    </img>
                </div>
                <div className="post-comments">
                    {console.log(this.state.post.username)};
                    {console.log(this.state.post, this.state.post.comments)}
                    <CommentSection id={this.state.post.id} likes={this.state.post.likes} comments={this.state.post.comments}/>
                </div>
            </>
        );
    }
}

export default PostContainer;