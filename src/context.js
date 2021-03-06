import React, { Component } from "react";
import axios from "axios";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    componentDidMount(){

        const getData = axios.get('https://floating-dusk-25106.herokuapp.com/bookings').then(res => { 
            let rooms = res.data
            let featuredRooms = rooms.filter(room => room.featured===true)
            let maxPrice = Math.max(...rooms.map(item=>
                item.price
            ));
            let maxSize = Math.max(...rooms.map(item=>
                item.size
            ));
            this.setState({
                rooms, featuredRooms, sortedRooms:rooms, loading:false, price:maxPrice,maxPrice, maxSize 
            })
        })
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ?
        target.checked : target.value;
        const name = e.target.name;
        this.setState(
            {
                [name]:value
            },
            this.filterRooms
        )
    }

    filterRooms = () => {
        let{
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state

        let tempRooms = [...rooms]

        capacity = parseInt(capacity)
        price = parseInt(price)

     
        if(type!=='all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }

    
        if(capacity!==1){
            tempRooms = tempRooms.filter(room => room.capacity === capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price)
        // filterin by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
 
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({
            sortedRooms:tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                { this.props.children }
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

const withRoomConsumer = (Component) => {
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=> <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export default RoomProvider;
export {RoomProvider, RoomContext, RoomConsumer, withRoomConsumer}