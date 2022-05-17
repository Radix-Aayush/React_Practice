import React from "react";

class Employee extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="card">
                     <div className="card-body">
                        <h2>
                            Welcome {this.props.name} age {this.props.age}
                        </h2>
                     </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Employee;