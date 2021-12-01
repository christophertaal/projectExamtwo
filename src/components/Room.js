import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

const Room = ({room}) => {

    const {name, slug, images, price} = room;
    console.log(images)
    const apiUrl = 'https://project-exam-strapi.herokuapp.com';
    return (
        <article className="room">
            <div className="img-container">
                <img src={apiUrl + images[0].formats.large.url|| defaultImg} alt="single room"/>
                <div className="price-top">
                    <h6>{price}$</h6>
                    <p>price pr night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Featuring
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}

export default Room;