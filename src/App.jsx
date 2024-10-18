
import { createContext, useState } from 'react'
import ChildA from './components/ChildA';

// Step 1: Create Context
const UserContext =  createContext();

//Step 2: wrap all the child inside a provider

//Step 3: pass value

//step 4 : consumer k andar jakar consume karlo

function App() {
  const [user, setUser] = useState({name:"Tarun"})
  return (
    <>
    <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
