import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import Login from './components/Login/Login'; 
import Register from './components/Register/Register'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage';
<<<<<<< HEAD
import Filter from './components/Filter/Filter';
import CategoryPage from './components/CategoryPage/CategoryPage';

=======
>>>>>>> 3304c1ae27201ad1f777b54cf1e293b25064e6c8
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Home /> <Footer /> </>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
<<<<<<< HEAD
        <Route path="product/:id" element={<><Navbar/> <ProductPage/><Footer /></>}/>
        <Route path="products" element={<><Navbar/><Filter/><Footer /></>}/>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
=======
        <Route path="product/:id" element={<><Navbar/><ProductPage/><Footer /></>}/>
>>>>>>> 3304c1ae27201ad1f777b54cf1e293b25064e6c8
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;