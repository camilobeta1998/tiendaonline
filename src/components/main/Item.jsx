import React from 'react'

const Item = ({producto}) => {
  return (
    <div>
        <img src={producto.img} alt="Imagen del producto"/>
        <div>
            <h2>{producto.title}</h2>
            <h3>{producto.category} - {producto.sexo}</h3>
        </div>
    </div>
  )
}

export default Item
