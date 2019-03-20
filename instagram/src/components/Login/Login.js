import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.logHandler=props.logHandler;
        this.state={
            username:'',
            password:''
        }
    }

    dataHandler = e => {
        window.localStorage.setItem('username', this.state.username);
        window.localStorage.setItem('password', this.state.password);
    }

    inputHandler = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        return (
            <div className="login-page">
                <form onSubmit={this.props.formHandler}>
                    <input
                        className="login-input"
                        type="text"
                        name="username"
                        placeholder="Username..."
                        value={this.state.username}
                        onChange={this.inputHandler}
                    /> 
                    <input
                        className="login-input"
                        type="text"
                        name="password"
                        placeholder="Password..."
                        value={this.state.password}
                        onChange={this.inputHandler}
                    /> 
                    <button className="login-button" onClick={this.dataHandler}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;