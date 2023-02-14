import React , {useState} from 'react'
import Cart from './Cart';

const Navbar = () => {

  //Para cambiar las clases de hamburguesas.
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //Aquí ira el state para mostrar o no el menu de tipo burger

  const [menu, setMenu] = useState(false);

  //alternar cambio de menú de hamburguesas
  
  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass('burger-bar clicked')
      setIsMenuClicked(true)
    } else{
      setBurgerClass('burger-bar unclicked')
      setIsMenuClicked(false)
    }
  }

  //aqui sera la funcion para cambiar el estado del setMenu

  const mostrarMenu = () =>{
    setMenu(!menu)
  }
  
  //Funcion que engloba todas las funciones para dar vida al boton

  const FuncionPadre = () =>{
    mostrarMenu()
    updateMenu()
  }

  return (
    <>
      <div className='Cabecera-button' onClick={FuncionPadre}>
          <div className={burgerClass} onClick={updateMenu}></div>
          <div className={burgerClass} onClick={updateMenu}></div>
          <div className={burgerClass} onClick={updateMenu}></div>
      </div>


      <nav className={`Cabecera-nav ${menu ? 'isActive ' : ''}`}>
            <ul className='Cabecera-ul'>
              <li className="Cabecera-li"><a href="cualquiercosa" className="Cabecera-a">Inicio</a></li>
              <li className="Cabecera-li"><a href="cualquiercosa" className="Cabecera-a">Hombre</a></li>
              <li className="Cabecera-li"><a href="cualquier cosa" className="Cabecera-a">Mujer</a></li>
              <li className="Cabecera-li"><a href="cualquier cosa" className="Cabecera-a">Nosotros</a></li>
            </ul>
            <Cart/>
      </nav>
    </>
  )
}

export default Navbar
