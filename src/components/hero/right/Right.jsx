import React, { useContext, useEffect, useState } from 'react'
import pizza1 from '../../../assets/01.png'
import pizza2 from '../../../assets/02.png'
import pizza3 from '../../../assets/03.png'
import pizza4 from '../../../assets/04.png'
import UserContext from '../../../context/UserContext'
function Right() {

  const {pizza} = useContext(UserContext);
  const [rotatee,setRotatee] = useState('-45');


  useEffect(()=>{
    if(pizza === 1){
      setRotatee("-135")
      
    }else if(pizza === 2){
      setRotatee("-225")
      
    }else if(pizza === 3){
      setRotatee("-315")
      

    }else{
      setRotatee("-45")
      
    }
  },[pizza])

  





  return (
    <div className='w-1/3 flex items-center justify-center relative'>
      {/* <h2>ht {rotatee}</h2> */}
        <div style={{transform:`rotate(${rotatee}deg)`}} className={`rounded-full  w-[1800px] h-[1800px] absolute -right-[1300px] transition-all ease-in-out duration-1000 `}>
          <div  className="quater top-left absolute flex items-center justify-center w-1/2 h-1/2 scale-50 p-10 "><img src={pizza1} alt="" className={`transition-all ease-in-out duration-2000 drop-shadow-[0_10px_10px_rgba(244,191,153,0.5)] `} /></div>
          <div className="quater top-right absolute flex items-center justify-center w-1/2 h-1/2  left-1/2 scale-50 p-10"><img src={pizza2} alt="" className={`transition-all ease-in-out duration-2000 drop-shadow-[0_4px_4px_rgba(250,201,91,0.5)] `}/></div>
          <div className="quater bottom-left absolute flex items-center justify-center w-1/2 h-1/2 top-1/2 scale-50 p-10"><img src={pizza4} alt="" className={`transition-all ease-in-out duration-2000 drop-shadow-[0_4px_4px_rgba(250,201,91,0.5)] `}/></div>
          <div className="quater bottom-right absolute flex items-center justify-center w-1/2 h-1/2  top-1/2 left-1/2 scale-50 p-10"><img src={pizza3} alt="" className={`transition-all ease-in-out duration-2000 drop-shadow-[0_4px_4px_rgba(250,201,91,0.5)]`}/></div>
        </div>


        {/* <h2>{alert(pizza)}</h2> */}
    </div>
  )
}

export default Right