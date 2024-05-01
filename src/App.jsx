import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import Login from './components/Login/Login'; 
import Register from './components/Register/Register'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartProvider';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
      <BrowserRouter>
        <CartProvider> 
        <Routes>
          <Route path="/" element={<> <Navbar /> <Home /> <Footer /> </>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product/:id" element={<><Navbar/><ProductPage/><Footer /></>}/>
          <Route path="/category/:categoryName" element={<><CategoryPage /> <Footer/> </>} />
          <Route path='search' element={<><Navbar /><SearchResult/> <Footer /></>} />
        </Routes>
        </CartProvider> 
      </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;