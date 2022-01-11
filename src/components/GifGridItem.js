import React from 'react';
import 'animate.css';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
    return (
        <div className='card animate__animated animate__zoomIn' tabIndex="0">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}