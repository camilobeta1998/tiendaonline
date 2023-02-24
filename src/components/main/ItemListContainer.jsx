import React , {useEffect , useState} from 'react'
import { products } from '../../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'; //este hook es propio de react-router-dom

const ItemListContainer = ({prop}) => {
  
  const {categoryName} = useParams()
  
  //Creare un estado para guardar todos y cada uno de los productos, para despues hacer posteriormente un map 
  const [items, setItems] = useState([])
      useEffect(() => {
          
          const getProducts = () =>{
              return new Promise((res, rej)=>{
                //Este setTimeOut sirve para simular el retardo que hay cuando se hace una llamada a servicios externos, o sea se tardara dos segundo

                //en hacer la resolucion de la promesa.

                const ProductosFiltrados = products.filter((prod)=> prod.sexo === categoryName)    //usaré el metodo filter para filtrar los productos que sean igual a la categoria, ya sean hombre o mujer

                const ref = categoryName===undefined ? products : ProductosFiltrados //si categoryName = undefined lo cual es el home retornará products sino retornara el producto filtrado

                setTimeout(()=>{
                    res(ref)  //aqui resolvera ya sea productosfiltrados por categoria o todos juntos 
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
      }, [categoryName]);

  
  if(!prop){
    return (
      <div className='Container-itemList-Container'>
            <ItemList items={items}/>
      </div>
    )
  } else {
    return(
        <div className='Container-itemList-Container'>
            <div className='contenedor-imagen'>
                <img className='ImagenDeportistas' src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/58aa50cb-efca-4835-b128-e27fb15c4e6f/zapatillas-ropa-y-accesorios-nike-para-hombre.jpg" alt="Imagen Nike" />
            </div>
                <ItemList items={items}/>
        </div>
    )
  }
}

export default ItemListContainer
