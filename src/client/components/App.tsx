import React, { useState } from 'react';
import Mood from './Mood'
import Image from './Image'
import Music from './Music';
// import Login from './Login';
// import Signup from './Signup';

export default function App () {
    const [moodState,setMoodState] = useState(0)
    return (
        <div className='MainContainer'>
            {/* <div className='LoginBox'>
                <Login></Login>
            </div>
            <div className='SignupBox'>
                <Signup></Signup>
            </div> */}
             <div className='MoodBox'>
                <Mood
                moodState={moodState}
                setMoodState={setMoodState}
                ></Mood>
            </div>
            <div className='ImageBox'>
                <Image></Image>
            </div>
            <div className='MusicBox'>
                <Music
                moodState={moodState}
                setMoodState={setMoodState}
                ></Music>
            </div>
        </div>
    )
}