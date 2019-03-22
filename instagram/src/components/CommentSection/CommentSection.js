import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : 0,
            liked : false,
            newComment : { username: localStorage.getItem('username'), text: ""},
            updatedComments : this.props.comments
        }
    }

    componentDidMount() {
        this.setState(prevState => { return {
            likes: this.props.likes, 
            updatedComments : JSON.parse(localStorage.getItem(`comments${this.props.id}`)),
            newComment : { username: localStorage.getItem('username'), text: ""}
        }});
    }

    inputChange = e => {
        this.setState({ newComment : {username: localStorage.getItem('username'), text: e.target.value}});
    }

    commentCreation = e => {
        e.preventDefault();
        if(this.state.newComment.text === "") { return 'No text to post' }
        let a = JSON.parse(localStorage.getItem(`comments${this.props.id}`));
        a.push(this.state.newComment);
        localStorage.setItem(`comments${this.props.id}`, JSON.stringify(a));
        this.setState(prevState => { return { 
            updatedComments: a,
            newComment: {username: "guest", text: ""} 
        }})
    }

    likeHandler = e => {
        this.setState(prevState => { return { 
            likes: (this.state.liked ? prevState.likes-1 : prevState.likes+1), 
            liked: !prevState.liked
        }
    })
    }

    render() {
        console.log(this.state.updatedComments);
        return (
            <div className="comment-section">
                <div className="click-icons">
                    <i onClick={this.likeHandler} className={this.state.liked ? "fas fa-heart" : "far fa-heart"}></i>
                    <i className="far fa-comment"></i>
                </div>
                <p className="likes">{this.state.likes} Likes</p>
                <div className="comments">
                    { this.state.updatedComments.map( comment => { return (
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
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        );
    }
}

export default CommentSection;