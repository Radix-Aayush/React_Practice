// class based component


import React from "react";

class WishCard extends React.Component{
render(){
    return(
        <React.Fragment>
        <div className="card">
            <div className="card-body">
                <h2>
                    Class Bases component
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
        </div>
        </React.Fragment>
    );
  }
}
export default WishCard;