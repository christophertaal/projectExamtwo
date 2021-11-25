import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import Footer from "../components/Footer";
const LogoutPage = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Logout">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <Logout/>
        <Footer />
        </>
    );
}

export default LogoutPage;