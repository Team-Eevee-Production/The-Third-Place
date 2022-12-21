import React, { useEffect, useState } from 'react';
export default function Image (props: {link: string[]})  {
    const [image, setImage] = useState('')
    let imageArr: string[] = []

    useEffect(() => {
        console.log("Use effect: ", props.link.length);
        setImage(props.link[0] || 'https://www.billboard.com/wp-content/uploads/2021/12/02-Big-Time-Rush-cr-Jordan-Knight-2021-billboard-1548.jpg');
    }, [props.link.length])

    function handleClick() {
        console.log("In Handle Click")
        setImage(props.link.shift())
    }

    return (
        <div className="picture">
            <div className='favorite-next'>
              <button onClick={handleClick}><i className="fi fi-br-angle-right next">Next</i></button>
              <i className="fi fi-br-comment-heart favorite"></i>
            </div>
            <img src={image}></img>
        </div>
        
    )
}