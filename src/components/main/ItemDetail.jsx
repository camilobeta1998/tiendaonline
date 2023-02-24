import React from 'react'
import Contador from '../main/contador/Contador'
const ItemDetail = ({productoPorId}) => {
    
  return (
    <>
        <div className='imagen-detalle-contenedor'>
            <img src={productoPorId.img} alt="imagenes de los tenis" /> 
        </div>

        <div className='detalle-contenedor'>
            <div className='informacion-detallada'>
                <h4>{productoPorId.title}</h4>
                <p className='precio'>${productoPorId.price}</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium impedit velit nulla eius labore, sint necessitatibus excepturi, alias porro soluta dignissimos nemo tempore numquam deserunt optio atque cumque, ab ipsa?z</p>
            </div>
            <div className='contenedor-contador'>
                <Contador stock={10}/>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
