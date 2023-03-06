import React , {useState} from 'react'
import  Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'


const Login = () => {

   const [data, setData] = useState({nombreCompleto: '' , email: '' , password: '' });

   //Esta funcion es para empezar a enviar datos a una base de datos 
    const enviarAlaBaseDatos = (e) =>{
        e.preventDefault()
        // const objeto = {
        //     comprador : {
        //         nombreCompleto : data.nombreCompleto,
        //         email: data.email,
        //         password: data.password
        //     }
        // }
    }

   const handleChange = (e) =>{
        const {name , value} = e.target
        setData({...data , [name] : value })
   }


  return (
    <>
        <h4>SUSCRIBETE</h4>
        <Form onSubmit={enviarAlaBaseDatos}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control  placeholder=" Ingresar nombre completo" name='nombreCompleto' onChange={handleChange} value={data.nombreCompleto}/> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingresar el correo electronico</Form.Label>
                <Form.Control type="email" placeholder=" email@example.com" name='email' onChange={handleChange} value={data.email}/>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresar contraseña" name='password' onChange={handleChange} value={data.password}/>
            </Form.Group>

            <Button variant="primary" type="submit" className='button'>
                Suscribirme
            </Button>
    </Form>
    </>
  )
}


export default Login
