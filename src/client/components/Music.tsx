import React, { useState, useRef, useEffect } from 'react';
import Iframe from 'react-iframe'

interface BtnState {
  moodState: number;
  setMoodState: any;
}

export default function Music (props:BtnState)  {
  
  
    
    if ( props.moodState === 0) {
      return (
        <div className='SpotifyBox'>
            <Iframe  styles={{borderRadius:"12px"}} url="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator" width="100%" height="380" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
    else if ( props.moodState === 2) {
      return (
        <div className='SpotifyBox'>
            <Iframe styles={{borderRadius:"12px"}}  url="https://open.spotify.com/embed/playlist/1Os1xxOKDTBQZqIJhMnkxf?utm_source=generator" width="100%" height="352" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
    else if ( props.moodState === 3) {
      return (
        <div className='SpotifyBox'>
            <Iframe styles={{borderRadius:"12px"}}  url="https://open.spotify.com/embed/playlist/4HXMPRVKOAfzoUwws8fqHW?utm_source=generator" width="100%" height="380" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
    else if ( props.moodState === 4) {
      return (
        <div className='SpotifyBox'>
            <Iframe styles={{borderRadius:"12px"}} url="https://open.spotify.com/embed/playlist/2Ly4RMGEjFg9ShL68febNd?utm_source=generator&theme=0" width="100%" height="380" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
    else if ( props.moodState === 5) {
      return (
        <div className='SpotifyBox'>
            <Iframe styles={{borderRadius:"12px"}} url="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0lmDjH?utm_source=generator" width="100%" height="380" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
     if ( props.moodState === 6) {
      return (
        <div className='SpotifyBox'>
            <Iframe styles={{borderRadius:"12px"}} url="https://open.spotify.com/embed/playlist/37i9dQZF1DWXqpDKK4ed9O?utm_source=generator" width="100%" height="380" frameBorder={0} allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
        </div>
      )
    }
  

     else return (
      <div></div>
    )
  
  
}