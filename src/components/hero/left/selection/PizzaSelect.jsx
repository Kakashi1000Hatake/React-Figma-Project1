import React, { useEffect, useRef, useState,useContext } from 'react'
import pizza1 from '../../../../assets/01.png'
import pizza2 from '../../../../assets/02.png'
import pizza3 from '../../../../assets/03.png'
import pizza4 from '../../../../assets/04.png'
import UserContext from '../../../../context/UserContext'


function PizzaSelect() {

  const {pizza,setPizza} = useContext(UserContext); 

  // const [rotation,setRotation] = useState()
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index); 
    setPizza(index)
  };
  const images = [pizza1,pizza2,pizza3,pizza4];



  return (
    <div className='flex gap-10 my-5' >

{images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`w-1/6 transition-all ease-in-out duration-500 drop-shadow-[0_4px_4px_rgba(250,201,91,0.5)] cursor-pointer ${activeIndex === index ? 'scale-125 flex' : 'flex'} `}
          onClick={() => handleClick(index)}
          alt="description"
        />
      ))}
      {/* <h2>hii {pizza}</h2> */}
    </div>
  )
}

export default PizzaSelect