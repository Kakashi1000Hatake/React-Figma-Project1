import React,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children})=>{
    const [pizza,setPizza]= useState(null)
    return(
        <UserContext.Provider value={{pizza,setPizza}}>
            {children   }
        </UserContext.Provider>
    )
}

export default UserContextProvider