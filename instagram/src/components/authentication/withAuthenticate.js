import React from 'react';

const withAuthenticate = ComponentOne => ComponentTwo => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn : '',
                username : localStorage.getItem('username')
            }
        }

        componentDidMount() {
            this.setState({isLoggedIn:localStorage.getItem('loggedin')});
        }

        formHandler = event => {
            event.preventDefault();
            this.setState(prevState=>{return{isLoggedIn:prevState.isLoggedIn==="true"?'false':'true'}});
            this.props.userChange(this.state.isLoggedIn);
        }

        logHandler = event => {
            this.setState(prevState=>{return{isLoggedIn:prevState.isLoggedIn==="true"?'false':'true'}});
            this.props.userChange(this.state.isLoggedIn);
        }

        render() {
            return (
            <>
                {this.state.isLoggedIn==="true" ? 
                <ComponentOne isLoggedIn={this.props.isLoggedin} logHandler={this.logHandler} username={this.state.username} /> 
                : 
                <ComponentTwo isLoggedIn={this.props.isLoggedin} formHandler={this.formHandler}/>}
            </>
        );
        }
    }
}



export default withAuthenticate;