import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>
      <h1>hii this is me , the bee</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
