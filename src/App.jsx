import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card';

function App() {
  return (
    <>
      <Navbar/>
      <Card
        imgSrc="https://foter.com/photos/400/alfonsina-free-standing-swirl-toilet-paper-holder.jpg"
        imgAlt="Card Image 1"
      />
      <Footer/>
    </>
  );
}

export default App;