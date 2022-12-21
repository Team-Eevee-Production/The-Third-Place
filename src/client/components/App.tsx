import React, { useState } from 'react';
import Mood from './Mood'
import Image from './Image'
import Music from './Music';
import User from './User';

export default function App () {
    const [moodState,setMoodState] = useState(0)
    return (
        <div className='MainContainer'>
            <div className='UserBox'>
                <User></User>
            </div>
            
            <div className="sky">
                <div className="stars"></div>
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="shooting-stars"></div>
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
            </div>
        
    )
}