import React , {useState} from "react";

let AuthUser = () => {

    let [state , setState] = useState({
        isLoggedIn : false
    });

    let login = () => {
        setState((state) => ({
            isLoggedIn : true
        }));
    };

    let logout = () => {
        setState((state) => ({
            isLoggedIn : false
        }));
    };

    return (
        <React.Fragment>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                      <div className="card">
                          <div className="card-header bg-success text-white">
                          {
                          state.isLoggedIn ? 
                          <p className="h4">WelcomeMr. Aayush</p> : 
                          <p className="h4">Welcome Guest!</p>
                          }
                          </div>
                          <div className="card-body bg-light">
                          {
                              state.isLoggedIn ? 
                              <button onClick={logout} className="btn btn-warning btn-sm">Logout</button> : 
                              <button onClick={login} className="btn btn-success btn-sm">Login</button>
                          }    
                          </div>
                      </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
};

export default AuthUser;