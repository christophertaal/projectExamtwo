import React from "react";
import axios from "axios";

class ContactForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            name:'',
            message:''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('hhttps://floating-dusk-25106.herokuapp.com/enquiries', this.state)
        window.location.reload()

    }

    render(){
        const {email, name, message} = this.state;
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
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" placeholder="your message..."value={message} rows="3" onChange={this.changeHandler}></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Enquiry</button>
                </form>
            </div>
    
        );
    }
}

export default ContactForm;