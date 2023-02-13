import React from 'react'
import ItemListContainer from './ItemListContainer'
import SectionUno from './SectionUno'
// import Contador from './contador/Contador'

const Main = () => {


  return (
    <main className='Main'>
        {/* <Contador stock={10}/> */}
        <SectionUno/>
        <ItemListContainer/>
    </main>
  )
}

export default Main
