import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent  from './myComponent/MyComponent'
import Header from './Header/header'

function App() {


  return (
    <>
      <Header />
      <MyComponent />
    </>
  )
}

export default App
