import React from 'react'
import ItemListContainer from './ItemListContainer'
import Contador from './contador/Contador'

const Main = () => {
  return (
    <main className='Main'>
        <Contador stock={10}/>
        <ItemListContainer/>
    </main>
  )
}

export default Main
