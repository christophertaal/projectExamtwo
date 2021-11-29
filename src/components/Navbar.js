import React from "react";
import logo from '../images/logo.jpeg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";

class Navbar extends React.Component {
    constructor(props) {
        super(props) 

        console.log(this)
    }

    state = { isOpen:false,}

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    


    render() {

        const token = localStorage.getItem('token')
        console.log(`Token: ${token}`)
        if(token == null) {
            return (
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">
                            <img src={logo} alt="Holidaze"/>
                            </Link>
                            <button onClick={this.handleToggle} type="button" className="nav-btn"> 
                                <FaAlignRight className="nav-icon" />
                            </button>   
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms/">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/enquiry/">Enquiry</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact Page</Link>
                            </li>
                         
                            <li>
                                <Link to="/login/">Login</Link>
                            </li>
                         
    
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">
                            <img src={logo} alt="Holidaze"/>
                            </Link>
                            <button onClick={this.handleToggle} type="button" className="nav-btn"> 
                                <FaAlignRight className="nav-icon" />
                            </button>   
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms/">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/enquiry-list/">List of Enquiry</Link>
                            </li>
                            <li>
                                <Link to="/contact-list/">List of Contacts</Link>
                            </li>
                            <li>
                                <Link to="/logout/"><button id="logout" className="btn btn-danger" onClick={() => window.location.reload()}>Logout</button></Link>
                            </li>
    
                        </ul>
                    </div>
                </nav>
            );
        }



    }
}

export default Navbar;