import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Card from './components/Card';
import Home from './components/Home'

function App() {

  return (
    <>

     <Home />
     <Card
      imgSrc="https://foter.com/photos/400/alfonsina-free-standing-swirl-toilet-paper-holder.jpg"
      imgAlt="Card Image 1"
      title="Product"
      description="Description"
      price="$299"
      />  
      <Footer />
    </>

  
    
  );
}

export default App
