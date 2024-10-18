import './app.css'
import {  useState } from "react"
import ChildA from "./components/ChildA";
import { createContext } from "react";

const ThemeContext = createContext();



// Step 1: Create Context
const UserContext =  createContext();
//Step 2: wrap all the child inside a provider
//Step 3: pass value
//step 4 : consumer k andar jakar consume karlo

function App() {
  const [user, setUser] = useState({name:"Tarun"})

  const [theme, setTheme] = useState('light')
  return (
    <UserContext.Provider value={user}>

    
 <ThemeContext.Provider value={{theme, setTheme}}>
  <div id="conatiner" style={{backgroundColor:theme==='light'?"beige":"black"}}>
  <ChildA/>
  
  </div>
  
 </ThemeContext.Provider>
 </UserContext.Provider>





    // <>
    
  )
}

export default App
export {UserContext}
export {ThemeContext}
