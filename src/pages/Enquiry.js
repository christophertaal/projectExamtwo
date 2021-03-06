import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ContactForm from "../components/contactForm";
import Footer
 from "../components/Footer";
const Enquiry = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Enquiry">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <ContactForm/>
        <Footer />
        </>
    );
}

export default Enquiry;