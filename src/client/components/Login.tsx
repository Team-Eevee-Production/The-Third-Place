import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login ()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const goLogin = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
          let res = await axios.post('/login', {
            username,
            password
          });

          if (res.status === 200) {
            setUsername('');
            setPassword('');
            setLoggedIn(true)
          }
        } catch (err) {
          console.error(`❌ Error in fetching register POST request: ${err}`);
        }
      };

    return (
        <div>
            <div className = 'login-form'>
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
                <button className='login-button' onClick={goLogin}>
                Login
                </button>
            </div>
        </div>
        
    )
}