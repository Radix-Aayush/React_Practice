import React, {useEffect, useState} from "react";
import UserService from "../Services-9/UserListServices";

let UserList = () => {

    let [state , setState] = useState({
        users : []
    });

    useEffect(async () => {

    //    UserService.getAllUsers().then((response) => {
    //      setState(() => ({
    //          users : response.data
    //      }));
    //    }).catch((error) =>{
    //       console.log(error);
    //    });


      let response = {};
        try {
        response = await UserService.getAllUsers();
        setState(() => ({
            users: response.data
        }));
    }
     catch (error) {
       console.log(error);
   }

   // component will unmount

   return () => {
       response = null;
   };

    }, []);

    let {users} = state;

    return (
        <React.Fragment>
                 <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                           <p className="h3 text-success">User List</p>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           orem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. </p>
                     </div>
                 </div>
             </div>
                <div className="container">
                     <div className="row">
                         <div className="col">
                            {/* <pre>{JSON.stringify(state.users)}</pre> */}
                            <table className="table table-hover text-center table-striped">
                                   <thead className="bg-dark text-white">
                                       <tr>
                                           <th>SNO</th>
                                           <th>NAME</th>
                                           <th>EMAIL</th>
                                           <th>STREET</th>
                                           <th>CITY</th>
                                           <th>WEBSITE</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {
                                           users.length > 0 && 
                                              users.map(user => {
                                                  return (
                                                      <tr key={user.id}>
                                                           <td>{user.id}</td>
                                                           <td>{user.name}</td>
                                                           <td>{user.email}</td>
                                                           <td>{user.address.street}</td>
                                                           <td>{user.address.city}</td>
                                                           <td>{user.website}</td>
                                                      </tr>
                                                  )
                                              })
                                           }
                                   </tbody>
                            </table>
                         </div>
                     </div>
                </div>
        </React.Fragment>
    )
};

export default UserList;