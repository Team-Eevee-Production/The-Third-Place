import { validateHeaderValue } from 'http';
import Image from './Image';
import React, { useEffect, useState } from 'react';
import { DataRouterContext } from 'react-router/dist/lib/context';

export default function Mood (props: {moodState: number; setMoodState: Function;})  {
    //change the color of each mood once it's clicked 
    const [moodState,setMoodState] = useState(0)
    const [formData, setFormData] = useState({
        mood: "",
        prompt: ""
    });
    const [imageArr, setImageArr] = useState([])

    function handleClick(num: number, mood: string) {
        setMoodState(num);

        setFormData(oldData => {
            return (
                {
                    ...oldData,
                    mood,
                }
            );
        });

        console.log('formData', formData);

        const body = formData;
        const url = '/img';

    }

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
      },[moodState])
    

     const handleSubmit = (e: { preventDefault: () => void; }) => {
         e.preventDefault();
        
         const body = formData;
         const url = '/img';

         console.log(body);
         fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(body)
        }) 
             .then(res => {
                 return res.json();
             })
             .then(data => {
                setImageArr(data.images);
                console.log('Data:', data);
             })

             .catch((err) => {
                 console.log('Error:', err);
             });
     }

    function handleChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;

        setFormData(oldData => {
            return (
                {
                    ...oldData, 
                    [name]: value
                }
            );
        });
        console.log('formData', formData);
    }

    return (
        <div>
            <div>
                <h1 className = 'moodMessage'>How is your heart today? </h1>
                <div className ='buttonArea'>
                    <button id='1' className='btn' onClick={() => handleClick(1, 'focused')} value={formData.mood} name='mood'>Focused</button>
                    <button id='2' className='btn' onClick={() => handleClick(2, 'cozy')} value={formData.mood} name='mood'>Cozy</button>
                    <button id='3' className='btn' onClick={() => handleClick(3, 'groovy')} value={formData.mood} name='mood'>Groovy</button>
                    <button id='4' className='btn' onClick={() => handleClick(4, 'gloomy')} value={formData.mood} name='mood'>Gloomy</button>
                    <button id='5' className='btn' onClick={() => handleClick(5, 'energetic')} value={formData.mood} name='mood'>Energetic</button>
                    <button id='6' className='btn' onClick={() => handleClick(6, 'loving')} value={formData.mood} name='mood'>Loving</button>
                </div>
            </div>

            <div className="form-wrapper" >
                <form className='submitForm' onClick={(e) => {e.preventDefault}}>
                    <label htmlFor='inputBox' className='FeelingCreative'>Feeling creative? Describe here</label>
                    <input type='text' id='inputBox' placeholder='Unicorn on Rainbow' onChange={handleChange} value={formData.prompt} name='prompt'></input>
                    <button type='submit' className="submit" onClick={handleSubmit}>Make Magic</button>
                </form>
            </div>
            <div className='ImageBox'>
                <Image
                    link={imageArr}
                />
            </div>
        </div>
    )
}