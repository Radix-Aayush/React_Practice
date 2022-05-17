import React, { useState } from 'react';

let StateStudent = () => {

let [state, setState] = useState({
  Student : [{
    name : 'John',
    course : 'BTech'
  },
  {
    name : 'Aayush',
    course : 'BE'
  },
  {
    name : 'Piyush',
    course : 'MBA'
  },
  {
    name : 'Ajay',
    course : 'LLB'
  },
]
});

let {Student} = state;  // Destructuring in ES6 / ES2017

    return(
        <React.Fragment>
        <h2>{JSON.stringify(state)}</h2>
        <div className='card'>
            <div className='card-body'>
            <h2>Name : {Student[0].name}</h2>
            <h3>Age : {Student[0].course}</h3>
            </div>
        </div>

        <div className='card'>
            <div className='card-body'>
            <h2>Name : {Student[1].name}</h2>
            <h3>Age : {Student[1].course}</h3>
            </div>
        </div>

        <div className='card'>
            <div className='card-body'>
            <h2>Name : {Student[2].name}</h2>
            <h3>Age : {Student[2].course}</h3>
            </div>
        </div>
            
        </React.Fragment>
    )
}
export default StateStudent;