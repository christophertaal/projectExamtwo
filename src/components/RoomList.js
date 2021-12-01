import React from "react";
import Room from './Room'

const RoomList = ({rooms}) => {

    if(rooms.length === 0) {
        return (
            <div className=" NoRoomsMatched">
                <h3>
                    No rooms matched your search!
                </h3>
            </div>
        );
    }


    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                        return <Room key={item.id} room={item} />
                    })}
            </div>
        </section>
    );
}

export default RoomList;