import React, { useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';

export default function User ()  {
    const [viewLogin, setViewLogin] = useState(true);
    const [signupbutton, setSignupButton] = useState(false);
    const [viewsignUpButton, setViewSignupButton] = useState(true);

    const handleClick = () => {
        setSignupButton(true);
        setViewLogin(false);
        setViewSignupButton(false);
    };

    //default is user is not logged in
    //if userIn is true => do not display the login or signup boxes
    //if userIn is false => display the login box

    //if user clicks signup => render the signup page 

    return (
        <div className='login-signup'>
            { !viewLogin ? "" : <Login></Login> }
            {viewsignUpButton ? <div className='no-account'>
                <p>Don't have an account?</p>
                <button onClick = {handleClick} className='no-account-button'>
                 Sign Up Now!
                </button>
            </div> : "" }
            { signupbutton ? <Signup></Signup> : "" }
        </div>
        
    )
}