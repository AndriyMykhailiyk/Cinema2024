import React, { useState } from "react";
import { createContext } from "react";

export const ButtonContext = createContext();

export default function BntContext ({children})  {
const [isButtonClick, SetisButtonClick] = useState(false);
const ButtonContext = createContext();
return (
    <>
    <ButtonContext.Provider value={{isButtonClick, SetisButtonClick}}>
    {children}
    </ButtonContext.Provider>
    </>
)

}
