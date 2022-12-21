import React, { useEffect, useState } from 'react';

interface BtnState {
    moodState: number;
    setMoodState: any;
}
export default function Mood (props:BtnState)  {
    
    function handleClick(num:number) {
        props.setMoodState(num)
      }

    //reset htmlElements - right now only for button color
    useEffect(() => {
        
        const btnElements = document.querySelectorAll<HTMLElement>('.btn');
        for (let i = 0; i < btnElements.length; i++) {
            btnElements[i].style.backgroundColor = 'white';
        }
    },[props.moodState])

    //using state to change button color
    //can add any html styling
      useEffect(() => {
        
        if (props.moodState === 1) {
            const button1 = document.getElementById('1')
            button1.style.backgroundColor = 'blue';
        }
       else if (props.moodState === 2) {
            
            const button2 = document.getElementById('2')
            button2.style.backgroundColor = 'red';
        }
        else if (props.moodState === 3) {
            
            const button3 = document.getElementById('3')
            button3.style.backgroundColor = 'teal';
        }
        else if (props.moodState === 4) {
            
            const button4 = document.getElementById('4')
            button4.style.backgroundColor = 'yellow';
        }
        else if (props.moodState === 5) {
            
            const button5 = document.getElementById('5')
            button5.style.backgroundColor = 'orange';
        }
       else if (props.moodState === 6) {
            
            const button6 = document.getElementById('6')
            button6.style.backgroundColor = 'purple';
        }
      },[props.moodState])
    return (
        <div>
            <div>
                <h1>What mood are you in today?</h1>
                <button id='1' className='btn' onClick={() => handleClick(1)}>Starving</button>
                <button id='2' className='btn' onClick={() => handleClick(2)}>Famished</button>
                <button id='3' className='btn' onClick={() => handleClick(3)}>Hungry</button>
                <button id='4' className='btn' onClick={() => handleClick(4)}>NeedFood</button>
                <button id='5' className='btn' onClick={() => handleClick(5)}>PleaseGod</button>
                <button id='6' className='btn' onClick={() => handleClick(6)}>AlmostDinner</button>
            </div>

            <div>
                <h1>Feeling Lonely? Try Life Alert!</h1>
                <form>
                <label htmlFor='inputBox'>INPUT</label>
                    <input type='text' id='inputBox' name='ghost'></input>
                    
                </form>
            </div>
        </div>
    )
}