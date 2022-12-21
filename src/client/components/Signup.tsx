import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';


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

    const signup = async(event: {preventDefault: () => void}) => {
        event.preventDefault();
        
        try {
            let response = await axios.post('/login', userData)
            if (response.status === 200){
                setUsername('');
                setPassword('');
                setFirstname('');
                setLastname('')
            }
        } catch (err) {
            console.log(`Error logging in: ${err}`)
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
                    onChange={(e) => setFirstname(e.target.value)}
                    />
                <label>LastName: </label>
                <input
                    placeholder='Enter Last Name'
                    type='text'
                    name='lastname'
                    onChange={(e) => setLastname(e.target.value)}
                    />
                <label>Username: </label>
                    <input
                    placeholder='Enter Username'
                    type='text'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label>Password: </label>
                    <input
                    placeholder='Enter Password'
                    type='text'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button onClick={signup}>
                Sign Up
                </button>
            </div>
        </div>
        
    )
}
