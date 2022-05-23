import React, {useState} from "react";
import ChildComponent from "./ChildComponent-2";

let ParentComponent = () => {
     //FOR PARENT
    let [state,setState] = useState({
        channel : "Tech Radix Technology",
        author : ''
    });


    //FOR CHILD
    let receiveData = (data) => {
        setState((state) => ({
            ...state,
            author : data
        }));
    };

    return(
        <React.Fragment>
         <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                      <div className="card">
                          <div className="card-header bg-success text-white">
                          <h4>Parent Component</h4>
                          <p>{state.channel}</p>
                          {/* for child component */}
                          <p>From Child : {state.author}</p>
                          </div>
                          <div className="card-body bg-light">
                            <ChildComponent channel={state.channel} sendData={receiveData}/>
                          </div>
                      </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
};
export default ParentComponent;

