import './App.scss';
import NavBar from './components/NavBar/NavBar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Detail from './components/Pages/Detail';
import Category from './components/Pages/Categorys';
import Checkout from './components/Pages/Checkout';
import CartProvider from './context/CartContext';

function App() {
    return (
      <CartProvider >
        <BrowserRouter >
          <NavBar/>
            <Routes>            
                <Route path='/' element={<Home />}/>
                <Route path='/contacto' element={<Contact />}/>
                <Route path='/:category/' element={<Category />}/>              
                <Route path='/:category/:id' element={<Detail />}/>   
                <Route path='/cart' element={<Checkout />}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
