// State concept in class based component

import React from "react";

class StateEmployee extends React.Component{

    constructor(){
        super();
        this.state = {
            employees : [{
                name : 'John',
                age : 35
            },
            {
                name : 'Aayush',
                age : 25
            }]
        }
    }

render() {
return(
    <React.Fragment>
        <div className="card">
            <div class="card-body">
                <h2>Name : {this.state.employees[0].name}</h2>
                <h3>Name : {this.state.employees[0].age}</h3>
            </div>
        </div>
        <div className="card">
            <div class="card-body">
                <h2>Name : {this.state.employees[1].name}</h2>
                <h3>Name : {this.state.employees[1].age}</h3>
            </div>
        </div>
    </React.Fragment>
)
}
}
export default StateEmployee;