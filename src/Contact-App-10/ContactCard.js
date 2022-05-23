import React from "react";

let ContactCard = (props) => {

    let {selectedContact} = props;

    return(
        <React.Fragment>
            {/* <p>Contact Card</p>
            <pre>{JSON.stringify(props.selectedContact)}</pre> */}

            {
                Object.keys(selectedContact).length > 0 && 
                <div className="card shadow-lg sticky-top">
                    <img src={selectedContact.image} alt="" className="img-fluid" width={150} height={150}/>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                 {selectedContact.sno}
                            </li>
                            <li className="list-group-item">
                                 {selectedContact.name}
                            </li>
                            <li className="list-group-item">
                                 {selectedContact.price}
                            </li>
                            <li className="list-group-item">
                                 {selectedContact.qty}
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};
export default ContactCard;

