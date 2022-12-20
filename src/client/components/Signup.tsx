import React from 'react';
import { useState } from 'react';

export default function Signup () {
    const [username, setUsername] = useState('');
    return (
    <div>
            <div className = 'signup-form'>
                <label for='username'>Username</label>
                    <input
                    placeholder='Enter Username'
                    type='text'
                    name='username'
                    />
                <label for='password'>Password</label>
                    <input
                    placeholder='Enter Password'
                    type='text'
                    name='password'
                    />
            </div>
        </div>
    )
}
