import React from 'react';
import Mood from './Mood'
import Image from './Image'
import Music from './Music';

export default function App () {
    return (
        <div className='MainContainer'>
            <div className="sky">
                <div className="stars"></div>
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="shooting-stars"></div>
             <div className='MoodBox'>
                <Mood></Mood>
            </div>
            <div className='ImageBox'>
                <Image></Image>
            </div>
            <div className='MusicBox'>
                <Music></Music>
            </div>
            </div>
        </div>
    )
}