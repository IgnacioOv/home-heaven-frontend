import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register'; 
import { Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SearchResult from './components/SearchResult/SearchResult';
import Checkout from './components/Checkout/Checkout';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import AddProductForm from './components/AddProduct/AddProduct';
import HeaderAddProduct from './components/HeaderAddProduct/HeaderAddProduct';
import UserPage from './components/UserPage/UserPage';
import HeaderUser from './components/HeaderUser/HeaderUser';
import Orders from './components/Order/Orders';
// No se necesita envolver con Provider devuelta porque se hace en el punto
// de entrada principal osea en el main
function App() {
  return (
        <Routes>
          <Route path="/" element={<> <Navbar /><CategoriesBar/> <Home /> <Footer /> </>} />
          <Route path="login" element={<Login />} />
          <Route path="userpage" element={<><Navbar/><UserPage/><Footer/></>} />
          <Route path="register" element={<Register />} />
          <Route path="myorders" element={<Orders />} />
          <Route path="product/:id" element={<><Navbar/><CategoriesBar/><ProductPage/><Footer /></>}/>
          <Route path="/category/:categoryName" element={<><CategoryPage /> <Footer/> </>} />                                      
          <Route path='search' element={<><Navbar /><CategoriesBar/><SearchResult/><Footer /></>} />
          <Route path="checkout" element={<><Navbar/><CategoriesBar/><Checkout/><Footer/> </>} />
          <Route path='addproduct' element={<><Navbar/><HeaderAddProduct></HeaderAddProduct><AddProductForm/><Footer/> </>} />
        </Routes> 
  );
}

export default App;