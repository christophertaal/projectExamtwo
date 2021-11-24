import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Login">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <LoginForm/>
        </>
    );
}

export default LoginPage;