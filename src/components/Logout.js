import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Logout extends React.Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

    render(){

        const token = localStorage.getItem('token')
        if(token == null) {
            return (
                <div>
                    <h1>You are now logout! Please Login Again!</h1>
                    <Link to="/login/">Login Again</Link>
                </div>
                
            ); 
        } else {
            return (
                <div>
                    <h1>You are now Logout!</h1>
                    <Link to="/login/">Login Again</Link>
                </div>
                
            );
        }
    }
}

export default Logout;