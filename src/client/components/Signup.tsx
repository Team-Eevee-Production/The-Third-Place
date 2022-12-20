import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Signup ()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const userData = {
        username,
        password,
        firstname,
        lastname
    }

    const handleSubmit = (e:React.MouseEvent) => {
        async function userSignup: (userData) = () => {

        }
    }

    return (
        <div>
            <div className = 'signup-form'>
                <label>FirstName: </label>
                <input
                    placeholder='Enter First Name'
                    type='text'
                    name='firstname'
                    />
                <label>LastName: </label>
                <input
                    placeholder='Enter Last Name'
                    type='text'
                    name='lastname'
                    />
                <label>Username: </label>
                    <input
                    placeholder='Enter Username'
                    type='text'
                    name='username'
                    />
                <label>Password: </label>
                    <input
                    placeholder='Enter Password'
                    type='text'
                    name='password'
                    />
                <button>
                Sign Up
                </button>
            </div>
        </div>
        
    )
}