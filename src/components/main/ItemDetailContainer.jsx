import React , {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { products } from '../../mock/products'


const ItemDetailContainer = () => {
  const [productoPorId, setProductoPorId] = useState({})
  const {idProd} = useParams()

  useEffect(()=>{
    const getProducts = () =>{
      return new Promise((res, rej)=>{
         const productoFiltradoId = products.find((prod)=>prod.id === parseInt(idProd))
         setTimeout(()=>{
            res(productoFiltradoId)
         } , 2000)
      })
    }

    
    getProducts()
      .then((res)=>{
          setProductoPorId(res)
      })
      .catch(()=>{
        console.log('error')
      })

  } , [idProd])
  
  return (
    <div className='contenedor-item-detail'>
      <ItemDetail productoPorId={productoPorId}/>
    </div>
  )
}

export default ItemDetailContainer
