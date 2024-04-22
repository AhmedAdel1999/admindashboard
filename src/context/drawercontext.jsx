import { useState,createContext } from "react"
export const DrawerContext = createContext()
const DrawerProvider = (props) =>{
    let currentMode = localStorage.getItem("currentMode");
    const[open,setOpen] = useState(false)
    const[mode,setMode] = useState(currentMode?currentMode:"light")

    const handleCloseDrawer = () =>{
        setOpen(!open)
    }
    
    return(
        <DrawerContext.Provider value={{open,handleCloseDrawer,mode,setMode}}>
            {props.children}
        </DrawerContext.Provider>
    )
}
export default DrawerProvider