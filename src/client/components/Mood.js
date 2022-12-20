import React from 'react';
export default function Mood ()  {

    return (
        <div>
            <div>
                <h1>What mood are you in today?</h1>
                <button>Focused</button>
                <button>Cozy</button>
                <button>Playful</button>
                <button>Gloomy</button>
                <button>Energetic</button>
                <button>Loving</button>
            </div>

            <div>
                <h1>Feeling Lonely? Try Life Alert!</h1>
                <form>
                <label for='inputBox'>INPUT</label>
                    <input type='text' id='inputBox' name='ghost'></input>
                    
                </form>
            </div>
        </div>
    )
}