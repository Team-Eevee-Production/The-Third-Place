import React from 'react';
import Mood from './Mood'
import Image from './Image'
import Music from './Music';
import User from './User';

export default function App () {

    return (
        <div className='MainContainer'>
            <div className='UserBox'>
                <User></User>
            </div>
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
    )
}