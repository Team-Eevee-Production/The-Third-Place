import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';

export default function User ()  {
    const [userIn, setUserIn] = useState(false);
    //default is user is not logged in
    //if userIn is true => do not display the login or signup boxes
    //if userIn is false => display the login box

    //if user clicks signup => render the signup page 
    useEffect(() => {
        if (userIn === false) {
            // return (
            //     <div>
            //         <Login></Login>
            //     </div>
            // )
        } else {
            // return (
            //     <div>
            //         <Signup></Signup>
            //     </div>
            // )
        }
    
    }, [userIn]);

    return (
        <div>
            <Login></Login>
            <Signup></Signup>
        </div>
        
    )
}