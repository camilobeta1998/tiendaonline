import React , {useState} from 'react'
const Contador = ({stock}) => {

    const [contador, setContador] = useState(0);

    //Funcion para sumar en el carrito
    const sumar = () =>{
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    //Funcion para restar en el carrito
    const restar = () =>{
        if(contador > 1 ){
            setContador(contador - 1)
        }
    }

    // const onAdd = () => {  Esta funcion hay que programarla para enviar al carrito

    // }




  return (
    <div className='Contador'>
        <div className='Contador-contenedor'>
            <div className='Contador-restar' onClick={restar}>-</div>
            <div className='Contador-pantalla' value={0}>{contador}</div>
            <div className='Contador-sumar'  onClick={sumar}>+</div>
        </div>
        <div className='Contador-agregar-al-carrito'>
            AGREGAR AL CARRITO
        </div>
    </div>
  )
}

export default Contador
