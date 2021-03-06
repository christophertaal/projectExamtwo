import React from "react";
import { FaWindows } from "react-icons/fa";
import { Redirect } from "react-router";

class LoginFormAPI extends React.Component {
    state = {user:'', password:'', loggedIn:false}

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.user, this.state.password)
        const token = localStorage.getItem('token')

        if(token != null) {
            setTimeout(() => {
                window.location.reload()
            }, 50)
            this.setState({loggedIn:true})
        }
    }
    

    
    render(){
        
        if(this.state.loggedIn) {
            return <Redirect  to="/"/>
        }
        return (
            <div className="loginForm">
                <form className="loginForm1" onSubmit={this.onFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.user} onChange={e => this.setState({user:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                    </div>
                    <button id="login"  type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
    
        );
    }
}

export default LoginFormAPI;
