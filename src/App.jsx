import './App.css'
import Footer from './components/Footer'
import Card from './components/Card';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <Footer />
    <Card
      imgSrc="https://foter.com/photos/400/alfonsina-free-standing-swirl-toilet-paper-holder.jpg"
      imgAlt="Card Image 1"
      title="Product"
      description="Description"
      price="$299"
    />  
    </>

  
    
  );
}

export default App
