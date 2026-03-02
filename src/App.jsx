import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartProvider';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './Components/Cart/Cart.jsx';
import CheckoutForm from './Components/CheckoutForm/CheckoutForm.jsx';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
