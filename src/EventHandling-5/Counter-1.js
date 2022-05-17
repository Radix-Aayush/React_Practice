import React, {useState} from "react";

let Counter = () => {

    let [state , setState] = useState({
        count : 0
    });

    let incCounter = () => {
        setState((state) = ({
            count : state.count + 1
    }))
    };

    let decCounter = () => {
        setState((state) = ({
            count : state.count - 1
        }))
    };

    return(
        <React.Fragment>
             <div className="container mt-5">
                 <div className="row">
                     <div className="col-md-3">
                           <div className="card">
                               <div className="card-header bg-success text-white">
                                   <p className="h4">Counter</p>
                               </div>
                               <div className="card-body">
                                   <h5 className="display-3">{state.count}</h5>
                                   <button onClick={incCounter} className="btn btn-primary btn-sm">Increment</button>
                                   <button onClick={decCounter} className="btn btn-warning btn-sm">decrement</button>
                               </div>
                           </div>
                     </div>
                 </div>
             </div>
        </React.Fragment>
    )
}
export default Counter;