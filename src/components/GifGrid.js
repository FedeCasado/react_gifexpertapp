import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {


    const { data:imagenes, loading } = useFetchGif(categoria);





    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                {
                    imagenes.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
