import React from 'react'
import  Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'


const Login = () => {
  return (
    <>
        <h4>SUSCRIBETE</h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="email" placeholder=" Ingresar nombre completo" /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingresar el correo electronico</Form.Label>
                <Form.Control type="email" placeholder=" email@example.com" />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresar contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit" className='button'>
                Suscribirme
            </Button>
    </Form>
    </>
  )
}

export default Login
