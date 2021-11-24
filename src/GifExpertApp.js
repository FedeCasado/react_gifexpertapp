import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifexpertApp = () => {

    // const categorias = ['One Ponch', 'Dragon Ball', 'Samurai X  '];
    const [categorias, setCategorias] = useState([ 'Dragon Ball' ] );
    
    // const handleAdd = () => {
    //     setcategorias([...categorias, 'SuperCampeones']);
    // }

    return(
        <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategorias={ setCategorias }/>
        <hr />
        
        
        <ol>
        {
            categorias.map(categoria => (
              <GifGrid 
              key={ categoria }
              categoria={categoria}
              /> 
            ))
        }
        </ol>
        </>
    )
}

export default GifexpertApp;
