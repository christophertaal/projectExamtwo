import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon:<FaHiking/>,
                title:"Free hiking",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle van",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon:<FaBeer/>,
                title:"Free beers",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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