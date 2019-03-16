import React from 'react';
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({post}) => {
    return (
        <>
            <div className="post-content">
                <div className="content-row">
                    <img alt="usrbadge"src={post.thumbnailUrl} className="user-badge">
                    </img>
                    <p className="username"> {post.username}</p>
                    {/* <i className="fas fa-ellipsis-h"></i> */}
                </div>
                <img alt="pstimg" className="post-image" src={post.imageUrl}>
                </img>
            </div>
            <div className="post-comments">
                <CommentSection likes={post.likes} comments={post.comments} />
            </div>
        </>
    );
}

export default PostContainer;