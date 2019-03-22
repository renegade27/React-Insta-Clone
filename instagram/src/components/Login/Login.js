import React from 'react';
import styled from 'styled-components';
import './Login.css';

const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 3.0rem;
    font-family: "Ubuntu Condensed", sans-serif;
`;

const LoginLogo = styled.img`
    margin: 10px 0;
`;

const LoginForm = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const LoginInput = styled.input`
    font-size: 3.0rem;
    text-align: start;
    margin-bottom: 50px;
    width: 60%;
    height: 100px;
    padding: 0px 100px;
`;

const LoginBtn = styled.button`
    cursor: pointer;
    width: 45%;
    border-radius: 10px;
    font-family: "Ubuntu Condensed", sans-serif;
    font-size: 3.0rem;
    opacity: 0.70;
    color: white;
    background-color: blue;
    height: 100px;
    padding: 0px 100px;
`;

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
            <LoginPage>
                <LoginLogo src={process.env.PUBLIC_URL + 'Naught-logo.png'} />
                <LoginForm onSubmit={this.props.formHandler}>
                    <LoginInput
                        className="login-input"
                        type="username"
                        name="username"
                        placeholder="Username..."
                        value={this.state.username}
                        onChange={this.inputHandler}
                    /> 
                    <LoginInput
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="Password..."
                        value={this.state.password}
                        onChange={this.inputHandler}
                    /> 
                    <LoginBtn className="login-button" onClick={this.dataHandler}>Login</LoginBtn>
                </LoginForm>
            </LoginPage>
        );
    }
}

export default Login;