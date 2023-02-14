import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import SectionUno from './SectionUno'

const Main = () => {


  return (
    <main className='Main'>
        <SectionUno/>
        <ItemListContainer/>
        <ItemDetailContainer/> 
    </main>
  )
}

export default Main
