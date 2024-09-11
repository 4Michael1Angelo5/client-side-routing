import { useLocation } from "react-router-dom"
import  {useEffect} from "react";

const Header =()=>{

    let location = useLocation();
    
    useEffect(()=>{
      console.log("url end point has changed to: " + location.pathname)
  
    },[location.pathname])

    return(
        <>
        </>
    )
}

export default Header;