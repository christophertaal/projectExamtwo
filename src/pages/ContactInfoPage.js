import React from "react";
import axios from "axios";

class ContactInfoPage extends React.Component{
    constructor(props) {
        super(props) 

        this.state = {
            email:[],
            name:[],
            message:[],
            telephone:[],
            address:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:1337/contacts').then(res => {
            res.data.map(r => {
                this.setState({telephone:[...this.state.telephone, r.telephone], address:[...this.state.address, r.address], email:[...this.state.email, r.email], name:[...this.state.name, r.name], message:[...this.state.message, r.message]})
            });
        })
    }

    render(){
        const emails = this.state.email;
        const names = this.state.name;
        const messages = this.state.message;
        const address = this.state.address;
        const telephone = this.state.telephone;

        const token = localStorage.getItem('token')
        if(token == null) {
            return (
                <div className="mt-5"><h1>You need to login to see this page</h1></div>
            );
        } else {
            return (
                <div>
                    <div className="container">
                        <div className="row align-items-start mt-5 mb-3">
                            <div className="col">
                            Email
                            </div>
                            <div className="col">
                            Name
                            </div>
                            <div className="col">
                            Telephone
                            </div>
                            <div className="col">
                            Address
                            </div>
                            <div className="col">
                            Message
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                            {emails.map((e, i) => <h6 className="p-2" key={i}>{i + 1}. {e}</h6>)}
                            </div>
                            <div className="col">
                            {names.map((e, i) => <h6 className="p-2" key={i}>{e}</h6>)}
                            </div>
                            <div className="col">
                            {messages.map((e, i) => <h6 className="p-2" key={i}>{e}</h6>)}
                            </div>
                            <div className="col">
                            {address.map((e, i) => <h6 className="p-2" key={i}>{e}</h6>)}
                            </div>
                            <div className="col">
                            {telephone.map((e, i) => <h6 className="p-2" key={i}>{e}</h6>)}
                            </div>
                        </div>
                        </div>
                </div>
            );
        }

    }
}

export default ContactInfoPage;