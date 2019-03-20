import React from 'react';
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <>
            <div className="post-content">
                <div className="content-row">
                    <img alt="usrbadge"src={props.post.thumbnailUrl} className="user-badge">
                    </img>
                    <p className="username"> {props.post.username}</p>
                </div>
                <img alt="pstimg" className="post-image" src={props.post.imageUrl}>
                </img>
            </div>
            <div className="post-comments">
                <CommentSection likes={props.post.likes} comments={props.post.comments} />
            </div>
        </>
    );
}

export default PostContainer;