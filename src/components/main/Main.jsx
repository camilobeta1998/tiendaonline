import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Carrito from './Carrito'
import Home from './Home'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'


const Main = () => {


  return (
    <main className='Main'>
        {/* Aqui van todas las rutas que vaya a usar en la pagina web */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Carrito/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer prop={true}/>}/>
        </Routes>
    </main>
  )
}

export default Main
