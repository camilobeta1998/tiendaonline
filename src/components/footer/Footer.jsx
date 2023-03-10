import React from 'react'
import Login from '../formulario/Login'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='Contenedor-footer-contactos'>
            <div className='Categorias'>
                <h4 className='categorias'>CATEGORIAS</h4>
                <ul>
                    <li> - Hombre</li>
                    <li> - Mujer</li>
                    <li> - Ropa</li>
                </ul>
            </div>

            <div className='Informacion-contacto'>
                <div className='contenedor-contacto'>
                        <h4>CONTACTO</h4>
                        <p>Itaguí</p>
                        <p>3175499226</p>
                        <p>betancurcamilo50@gmail.com</p>
                </div>
                
                <div className='iconos'>
                    <a href="https://www.linkedin.com/in/camilo-betancur-1a2023246/" className="fa fa-linkedin"> </a>
                    <a href="linkInstagram" className="fa fa-instagram"> </a>
                    <a href="https://wa.me/573175499226" className="fa fa-whatsapp"> </a>
                </div>
            </div>

            <div className='formulario'>
                <Login/>
            </div>
        
        </div>
      
    </div>
  )
}

export default Footer
