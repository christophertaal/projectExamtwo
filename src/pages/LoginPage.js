import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

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
        <Footer />
        </>
    );
}

export default LoginPage;