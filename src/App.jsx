import './App.css'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Card
      imgSrc="https://foter.com/photos/400/alfonsina-free-standing-swirl-toilet-paper-holder.jpg"
      imgAlt="Card Image 1"
      title="Product"
      description="Description"
      price="299"
    />  
    <Footer />
    </>

  
    
  );
}

export default App
