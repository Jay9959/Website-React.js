import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header1 from './componet/Header-1.jsx';
import Header2 from './componet/Header-2.jsx';
import Footer from './componet/Footer.jsx';
import { Route, Routes } from 'react-router';
import Home from './componet/Home.jsx';
import ShopLeftsidebar from './componet/Shop-Left-sidebar.jsx';
import ShopRightsidebar from './componet/Shop-Right-sidebar.jsx';
import ShopFullwidth from './componet/Shop-Full-width.jsx';
import ProductLeftsidebar from './componet/product-Left-sidebar.jsx';
import ProductRightsidebar from './componet/product-Right-sidebar.jsx';
import ProductFullWidth from './componet/Product-Full-width.jsx';
import About from './componet/About.jsx';
import ContactUs from './componet/ContactUs.jsx';
import Cart from './componet/Cart.jsx';

const App = () => {
    return (
        <>
            <Header1 />
            <Header2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shopLeftsidebar' element={<ShopLeftsidebar />} />
                <Route path='/shopRightsidebar' element={<ShopRightsidebar />} />
                <Route path='/shopFullWidthsidebar' element={<ShopFullwidth />} />
                <Route path='/productLeftsidebar' element={<ProductLeftsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productFullWidth' element={<ProductFullWidth />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}


export default App;