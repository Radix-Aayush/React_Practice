import React, {useState} from "react";

let RegistrationForm = () => {

    let [state, setState] = useState({
        user : {
            username : '',
            email : '',
            password : '',
            designation : '',
            bio : '',
            terms : false
        }
    })

let {user} = state;

    let updateInput = (event) => {
        setState((state) =>({
            user: {
                ...state.user,
                [event.target.name] : event.target.value
            }
        }));
    };

    let updateCheck = (event) => {
        setState((state) =>({
            user: {
                ...state.user,
                [event.target.name] : event.target.checked
            }
        }));
    };

    let submitRegister = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return(
        <React.Fragment>
        <pre>{JSON.stringify(state.user)}</pre>
              <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                      <div className="card">
                          <div className="card-header bg-success text-white">
                              <p className="h4">Registration Form</p>
                          </div>
                          <div className="card-body bg-light">
                             <form onSubmit={submitRegister}>
                             <div className="mb-3">
                                    <input 
                                    name="username"
                                    value={user.username}
                                    onChange={updateInput}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username"/>
                                 </div>
                                 <div className="mb-3">
                                      <input 
                                      name="email"
                                      value={user.email}
                                      onChange={updateInput}
                                      type="email" className="form-control" placeholder="Email"/>
                                 </div>
                                     <div className="mb-3">
                                 <input
                                    name="password"
                                    value={user.password}
                                    onChange={updateInput} 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"/>
                                     </div>
                                 <div className="mb-3">
                                 <select className="form-control" 
                                         name="designation"
                                         value={user.designation}
                                         onChange={updateInput}>
                                       <option value="">Select Designation</option>
                                       <option value="Software Engineer">Software Engineer</option>
                                       <option value="Sr. Software Engineer">Sr. Software Engineer</option>
                                       <option value="Tech Lead">Tech Lead</option>
                                       <option value="Project Manager">Select Designation</option>
                                       <option value="Director">Select Designation</option>
                                 </select>
                                 </div>
                                <div className="mb-3">
                                    <textarea 
                                         name="bio"
                                         value={user.bio}
                                         onChange={updateInput}
                                         row={4} 
                                         className="form-control" 
                                         placeholder="Bio"/>
                                 </div>
                                 <div className="mb-3">
                                     <input 
                                     name="terms"
                                     onChange={updateCheck}
                                     type="checkbox" 
                                     className="form-check-input" 
                                     placeholder="Username"/> Accept term and condition
                                 </div>
                                 <div className="mb-3">
                                 <input type="submit" className="btn btn-warning btn-sm" value="Register"/>
                                     </div>
                             </form>
                          </div>
                      </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
};

export default RegistrationForm;