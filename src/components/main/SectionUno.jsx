import React , {useState , useEffect}  from 'react'

const SectionUno = () => {
  const imagenes = require.context('../../images' , true);
  
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(()=>{
      setCount(count + 1) 
      if(count>3){
        setCount(1)
      }
    } , 5000)
    return () => {
      clearInterval(interval) 
    };
  }, [count]);
  
  return (
      <section className='SectionUno'>
        <img alt='Banner Nike' src={imagenes(`./image${count}.jpg`)} className='image'/>
      </section>
  )
}


export default SectionUno
