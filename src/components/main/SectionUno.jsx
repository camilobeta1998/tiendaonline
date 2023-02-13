import React , {useState , useEffect}  from 'react'
// import imagen1 from '../../images/image1.jpg'

const SectionUno = () => {
  const imagenes = require.context('../../images' , true);
  
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(()=>{
      setCount(count + 1)
      if(count>3){
        setCount(1)
      }
    } , 4000)
    return () => {
      clearInterval(interval)
    };
  }, [count]);
  

  return (
    <section className='SectionUno'>
    <img alt='' src={imagenes(`./image${count}.jpg`)} id='image'/>
    </section>
  )


  }



export default SectionUno
