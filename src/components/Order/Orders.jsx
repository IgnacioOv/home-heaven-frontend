import Navbar from '../Navbar/Navbar';  
import Footer from '../Footer/Footer';  
import HeaderOrders from './HeaderOrders';
import {Link} from 'react-router-dom';

const Orders = () => {
    return (
        <>
        <Navbar />
        <HeaderOrders />
        <div className='containerorder'>

        <div>
            Orders
        </div>
        <Link to="/userpage">
        <button className="volverbutton">
                Volver
        </button>
        </Link>
        </div>
        <Footer />  
        </>
        
    )
}

export default Orders;