import React, {useState} from "react";
import ContactServices from "../Services-9/ContactServices";

let ContactList = (props) => {

    let [state, setState] = useState({
        contacts : ContactServices.getContactList()
    })

    let {contacts} = state;

    let clickContact = (contact) => {
       props.sendContact(contact); // send Data to parent
    };
    return(
        
        <React.Fragment>
           <table className="table table-hover text-center table-striped">
           <thead className="bg-dark text-white">
               <tr>
                   <th>SNO</th>
                   <th>Image</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Qty</th>
               </tr>
           </thead>
           <tbody>
               {
                   contacts.length > 0 && contacts.map(contact => {
                       return(
                           <tr key={contact.sno} onClick={() => clickContact(contact)}>
                               <td>{contact.sno}</td>
                               <td><img src={contact.image} width={50} height={50}/></td>
                               <td>{contact.name}</td>
                               <td>{contact.price}</td>
                               <td>{contact.qty}</td>
                           </tr>
                       )
                   })
               }
           </tbody>

           </table>
        </React.Fragment>
    )
};
export default ContactList;

