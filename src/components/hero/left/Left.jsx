import React, { useContext, useEffect, useState } from 'react'
import PizzaSelect from './selection/PizzaSelect'
import UserContext from '../../../context/UserContext'
import TextRotate from './textRotate/TextRotate';

function Left() {

  const {pizza} = useContext(UserContext);
  const [index,setIndex] = useState(null)

  // setIndex(pizza.activeIndex)
  // useEffect(()=>{
  // },[pizza])
  // setIndex(pizza.activeIndex)
  // setIndex(pizza.index)


  return (
    <div className='w-1/2  flex justify-center h-3/4 flex-col p-16 font-medium gap-5'>
      <div className='flex flex-col gap-5'>
      <h3 className='font-bold text-lg'>Today's Special</h3>
      <TextRotate />
      <p className='text-xl tracking-wider font-thick '>Pizza is an italian dish that was created in Italy, The Naples area. It is made with different toppings.</p>
    </div>
      <PizzaSelect />

      {/* <h2>hii pizza no. {index}</h2> */}

    {/* <h3> hii pizza no {pizza}</h3> */}
          
    </div>
  )
}

export default Left