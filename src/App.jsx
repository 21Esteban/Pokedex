import { useState } from 'react'
import './App.css'

import {TopBar} from "./components/TopBar"
import {PokeList} from "./components/PokeList"
import {BottomBar} from "./components/BottomBar"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </div>
   
  )
}

export default App
