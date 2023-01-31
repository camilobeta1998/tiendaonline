import React , {useEffect , useState} from 'react'
import { products } from '../../mock/products'
import ItemList from './ItemList';
const ItemListContainer = () => {

  //Creare un estado para guardar todos y cada uno de los productos, para despues hacer posteriormente un map 
  const [items, setItems] = useState([])

      useEffect(() => {
          const getProducts = () =>{
              return new Promise((res, rej)=>{
                //Este setTimeOut sirve para simular el retardo que hay cuando se hace una llamada a servicios externos, o sea se tardara dos segundo
                //en hacer la resolucion de la promesa.
                setTimeout(()=>{
                    res(products)
                }, 2000)
              })
          }
        
          getProducts()
            .then((res)=>{
              setItems(res)
            })
            .catch(()=>{
              console.log('error')
            })
      }, []);

  return (
    <div className='Container-itemList-Container'>
          <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer
