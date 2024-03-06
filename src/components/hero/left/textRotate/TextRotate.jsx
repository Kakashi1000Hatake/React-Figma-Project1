import React, { useContext, useRef, useState,useEffect } from 'react'
import UserContext from '../../../../context/UserContext'

function TextRotate() {

    const {pizza} = useContext(UserContext)
    // const reff = useRef()
    
    // const [topp,setTopp] = useState('0')
    const [name,setName] = useState("Garden Lover")

    useEffect(()=>{
        if(pizza === 1){
        
           setName("Chicken Fanboy") 
        
        }else if(pizza === 2){
            setName("Cheese Super") 
           
        }else if(pizza === 3){
          
            setName("Mushroom Flex") 
    
        }else{
            setName("Garden Lover") 
           
        }
      },[pizza]);

  return (
    <div>
        <h1  className={` font-semibold text-4xl h-10 overflow-hidden relative `}>
            <span  className='transition ease-in-out duration-700'>{name}</span><br />
            
        </h1>
    </div>
  )
}

export default TextRotate