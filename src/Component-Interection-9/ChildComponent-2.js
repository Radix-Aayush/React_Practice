import React, {useState} from "react";

let ChildComponent = (props) => {

    // FOR CHILD
    let [state, setState] = useState({
       author : 'Aayush Jain'
    });

    let clickBtn = () => {
    //  here tranfer data from child to parent
        props.sendData(state.author);
    };


    return(
        <React.Fragment>
          <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                      <div className="card">
                          <div className="card-header bg-success text-white">
                          <h4>Child Component</h4>
                          </div>
                          <div className="card-body bg-light">
                              {/* from parent component */}
                            <p>{props.channel}</p>

                            {/* for child component */}
                            <button onClick={clickBtn} className="btn btn-dark btn-sm">Send</button>
                          </div>
                      </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
};
export default ChildComponent;

