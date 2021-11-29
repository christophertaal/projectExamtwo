import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ContactFormDetails from "../components/ContactFormDetails";
import Footer from "../components/Footer";


 const ContactPage = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Contact Page">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <ContactFormDetails/>
                    <div className= "contact-details">
                       Welcome to HOLIDAZE, it is a new local tourism agency in Bergen. This is to cater the needs of tourist in looking for their accomodation in the area. Holidaze is a hotel where it has 
                       a diffrent room-type that will cater the needs of tourists and the locals. For any inquiries, Please send your messages, names, telephone/ email and our 24-hour customer representative will 
                       get to you. You can visit as at our office  <br></br><strong> <i> 123 New Street, Bergen Norway 01234. </i></strong>
                    </div>
        <Footer />
        </>
    
    );
}

export default ContactPage;