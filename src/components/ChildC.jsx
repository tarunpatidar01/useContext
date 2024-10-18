import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { UserContext } from '../App'

function ChildC() {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    function handleclick(){
   if(theme === 'light'){
    setTheme('dark')
   }else{
    setTheme('light')
   }
    }
  return (
    <div>
      
      {theme}
      <h1>Hello {user.name}</h1>
      <button onClick={handleclick}>CHnage Theme</button>
    </div>
  )
}

export default ChildC
