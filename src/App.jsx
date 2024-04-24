import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import Login from './components/Login/Login'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Home /> <Footer /> </>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;