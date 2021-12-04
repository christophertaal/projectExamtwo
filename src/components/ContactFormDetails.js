import React from "react";
import axios from "axios";

class ContactFormDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            name:'',
            message:'',
            number:0
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://floating-dusk-25106.herokuapp.com/contacts', this.state)
        window.location.reload()

    }

    render(){
        const {email, name, message,number} = this.state;
        return (

            <div className="p-5">
                <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="type your email here" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" id="exampleFormControlInput2"placeholder="type your name here" value={name} onChange={this.changeHandler}/>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Telephone</label>
                    <input name="number" type="number" className="form-control" id="exampleFormControlInput2"placeholder="type your telephone here" value={number} onChange={this.changeHandler}/>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" placeholder="your message..."value={message} rows="3" onChange={this.changeHandler}></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Contact Details</button>
                </form>
            </div>
    
        );
    }
}

export default ContactFormDetails;