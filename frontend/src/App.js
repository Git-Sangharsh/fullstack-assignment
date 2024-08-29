import React from 'react'
import "./App.css"
import Navbar from "../src/components/navbar/Navbar";
import Cards from "../src/components/cards/Cards";
import Addcard from './addCard/Addcard';
import Footer from './footer/Footer';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Cards />
      <Addcard />
      <Footer />
    </div>
  )
}

export default App