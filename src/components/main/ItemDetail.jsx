import React from 'react'
import Contador from '../main/contador/Contador'
const ItemDetail = () => {
  return (
    <>
        <div className='imagen-detalle-contenedor div-contenedor'>
            <img src="http://tienda.keyinsolutions.com//Assets/images/uploads/pro_2b1a81cfe27f85486abbf5a7f8860cd9.jpg" alt="imagenes del detalle" />
            
        </div>

        <div className='detalle-contenedor'>
            <div className='informacion-detallada'>
                <h4>Bocina JBL Flip 5</h4>
                <p className='precio'>$300000</p>
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
