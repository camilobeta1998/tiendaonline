import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({producto}) => {

  return (
    <Link to={`/detail/${producto.id}`}>
        <div className='Container-itemlist-productos'>
          <div className='contenedor-imagen'>
              <img className='Imagen-productos' src={producto.img} alt="Imagen del producto"/>
          </div>
            <div className='contenedor-descripcion-producto'>
                <div>
                    <h2>{producto.title}</h2>
                    <h3 className='genero'>{producto.category} - {producto.sexo}</h3>
                </div>
                    <h3>{producto.price} $</h3>
            </div>
        </div>
    </Link>
  )
}

export default Item
