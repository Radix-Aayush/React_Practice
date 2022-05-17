import React, {useState} from "react";

let WishMessage = () => {

     let [state , setState] = useState({
         message : 'Hello'
     })

     let sayGoodMorning = () => {
          setState((state) = ({
              message : 'Good Morning'
          }))
     }

     let sayGoodAfterNoon = (value) => {
        setState((state) = ({
            message : value
        }))
   }

    return(
        <React.Fragment>
             <div className="container mt-5">
                 <div className="row">
                     <div className="col-md-5">
                           <div className="card">
                               <div className="card-header bg-success text-white"> 
                                   <p className="h4">Wish Message</p>
                               </div>
                               <div className="card-body">
                                   <h5 className="display-3">{state.message}</h5>
                                   <button onClick={sayGoodMorning} className="btn btn-primary btn-sm m-3">Good Morning</button> 
                                     {/* without parameter function call */}
                                   <button onClick={() => sayGoodAfterNoon('Good Afternoon') } className="btn btn-warning btn-sm m-3">Good Afternoon</button>
                                   {/* with parameter function call */}
                                   <button onClick={()=>{setState((state)=>({message : 'Good Evening'}))}} className="btn btn-info btn-sm m-3">Good Evening</button>
                                   {/* Anamonous function call */}
                               </div>
                           </div>
                     </div>
                 </div>
             </div>
        </React.Fragment>
    )
}
export default WishMessage;