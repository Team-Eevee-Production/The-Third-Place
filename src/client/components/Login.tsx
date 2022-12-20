import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login ()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div className = 'login-form'>
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
                Login
                </button>
            </div>
        </div>
        
    )
}