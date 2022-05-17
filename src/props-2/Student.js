//props using functional based component

import React from "react";

let Student = (props) => {
    return (
        <React.Fragment>
                <div className="card">
                     <div className="card-body">
                        <h2>
                               Welcome {props.name} 
                              <pre>{JSON.stringify(props)}</pre> 
                            {/* Here props contain object & object can not be display 
                            directly firstly we have to content it to string by JSON.stringfy */}
                        </h2>
                     </div>
                </div>
            </React.Fragment>
    )
};

export default Student;

