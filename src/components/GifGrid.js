import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import 'animate.css';

export const GifGrid  = ({category}) => {
    const { data: images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <h3  className='animate__animated animate__flash'>Cargando...</h3>}
            <div className='cards'>
                { images.map( img => <GifGridItem key={img.id} {...img}/>) }
            </div>
        </>
    )
}
