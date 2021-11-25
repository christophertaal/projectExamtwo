import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"It is best to take a moment before ending the day with your favourite cocktails. It is our pleasure to serve you. See you."
            },
            {
                icon:<FaHiking/>,
                title:"Free hiking",
                info:"We have team that is well-experience in your sports. We take advantage of our beautiful mountain that is known in the area."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle van",
                info:"We offer free transport from our hotel to the closest train atation. Our shuttle is environment friendly."
            },
            {
                icon:<FaBeer/>,
                title:"Free beers",
                info:"We make our own beers on the hotel. We welcome our guest that loves beer to take advantage of our free taste during our happy hours at the hotel."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}

                </div>
            </section>
        );
    }
}

export default Services;