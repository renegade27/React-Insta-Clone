import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : 0,
            liked : false,
            newComment : { username: "guest", text: ""},
            comments : props.comments
        }
    }

    componentDidMount() {
        this.setState({likes:this.props.likes});
    }

    inputChange = e => {
        this.setState({ newComment : {username: "guest", text: e.target.value}});
    }

    commentCreation = e => {
        e.preventDefault();
        if(this.state.newComment.text === "") { return 'No text to post' };
        this.setState(prevState => { return { comments: [...prevState.comments, this.state.newComment], newComment: {username: "guest", text: ""} }})
        console.log(this.state.comments);
    }

    likeHandler = e => {
        this.setState(prevState => { return { 
            likes: (this.state.liked ? prevState.likes-1 : prevState.likes+1), 
            liked: !this.state.liked
        }
    })
    }

    render() {
        return (
            <div className="comment-section">
                <div className="click-icons">
                    <i onClick={this.likeHandler} className={this.state.liked ?"fas fa-heart" : "far fa-heart"}></i>
                    <i className="far fa-comment"></i>
                </div>
                <p className="likes">{this.state.likes} Likes</p>
                <div className="comments">
                    { this.state.comments.map( comment => { return (
                        <div className="comment">
                            <p className="comment-username">{comment.username}</p>
                            <p className="comment-content">{comment.text}</p>
                        </div>
                    );
                    })}
                </div>
                <form onSubmit={this.commentCreation}>
                    <input 
                        className="new-comment" 
                        placeholder="Add a new comment..." 
                        value={this.state.newComment.text} 
                        type='text' 
                        onChange={this.inputChange}
                    />
                </form>
            </div>
        );
    }
}

export default CommentSection;