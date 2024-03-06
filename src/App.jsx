import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import UserContextProvider from './context/UserContextProvider'
import Acc from './components/Acc'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <UserContextProvider>
      <Header />
      <Hero />
      {/* <Acc /> */}
    </UserContextProvider>
    
  )
}

export default App
