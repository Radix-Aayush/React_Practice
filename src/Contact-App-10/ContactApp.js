import React, {useState} from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

let ContactApp = () => {

    let [state, setState] = useState({
        selectedContact : {}
    });

    let {selectedContact} = state;

    let receiveContact = (contact) => {
            setState((state) => ({
                selectedContact: contact
            }));
    };

    return(
        <React.Fragment>
        {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Contact App</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the industry's 
                         standard dummy text ever since the 1500s, when an unknown
                         printer took a galley of type and scrambled it to make a type 
                         specimen book. </p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList sendContact={receiveContact}/>
                    </div>
                    <div className="col-md-3">
                      <ContactCard selectedContact={selectedContact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ContactApp;

