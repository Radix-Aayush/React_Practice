import React, {useState} from "react";


let LoginForm = () => {

    
let [state , setState] = useState({
    user : {
        username : '',
        password : ''
    }
});

let changeInput = (event) => {
    setState((state) => ({
        user : {
            ...state.user,
            [event.target.name] : event.target.value
        }
    }));
};

let submitLogin = (event) => {
    event.preventDefault();
    console.log(user);
};

let {user} = state;

    return(
        <React.Fragment>
        {/* <pre>{JSON.stringify(state)}</pre> */}
       <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                      <div className="card">
                          <div className="card-header bg-success text-white">
                              <p className="h4">Login Form</p>
                          </div>
                          <div className="card-body bg-light">
                              <form onSubmit={submitLogin}>
                                  <div className="mb-3">
                                       <input
                                         name="username" 
                                         value={user.username} 
                                         onChange={changeInput}
                                         type="text"
                                         className="form-control" 
                                         placeholder="username"/>
                                  </div>
                                  <div className="mb-3">
                                       <input 
                                        name="password"
                                        value={user.password} 
                                        type="password" 
                                        onChange={changeInput}
                                        className="form-control" 
                                        placeholder="password"/>
                                  </div>
                                  <div className="mb-3">
                                       <input type="submit" className="btn btn-success btn-sm" value="Login"/>
                                  </div>
                              </form>
                          </div>
                      </div>
                </div>
            </div>
        </div>
        </React.Fragment> 
    )
}

export default LoginForm;