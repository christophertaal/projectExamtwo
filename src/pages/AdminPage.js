import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Admin from "../components/Admin";
// import { Redirect } from "react-router";

class AdminPage extends React.Component{


    render(){
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="Admin">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <Admin/>
            <Link to="/logout/">Logout</Link>
    
            </>
        );
    }
}

export default AdminPage;