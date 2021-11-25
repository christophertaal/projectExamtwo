import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const EnquiryList = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Enquiry List">
                <Link to="/" className="btn-primary">
                    Return Home
       
                </Link>
                <Footer/>
            </Banner>
        </Hero>

        </>
    );
}

export default EnquiryList;