import React from 'react'
import "./App.css"
import Navbar from "../src/components/navbar/Navbar";
import Cards from "../src/components/cards/Cards";
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Cards />
    </div>
  )
}

export default App