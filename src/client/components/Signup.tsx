import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';


export default function Signup ()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [loggedIn, setIsLoggedIn] = useState('false')

    const userData = {
        username,
        password,
        first_name,
        last_name
    }

    const signup = async(event: {preventDefault: () => void}) => {
        event.preventDefault();
        
        try {
            let response = await axios.post('http://localhost:3000/user/signup', userData)
            if (response.status === 200){
                console.log('Signed up')
                setUsername('');
                setPassword('');
                setFirstname('');
                setLastname('');
                setIsLoggedIn('true');
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
                    name='first_name'
                    onChange={(e) => setFirstname(e.target.value)}
                    />
                <label>LastName: </label>
                <input
                    placeholder='Enter Last Name'
                    type='text'
                    name='last_name'
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
