import React from 'react';
import 'animate.css';

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className='card animate__animated animate__zoomIn' tabIndex="0">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
