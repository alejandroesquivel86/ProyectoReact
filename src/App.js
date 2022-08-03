import './App.scss';
import NavBar from './components/NavBar/NavBar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Product from './components/Pages/Products';

function App() {
    return (
      <BrowserRouter >
        <NavBar/>
          <Routes>            
              <Route path='/' element={<Home />}/>
              <Route path='/contacto' element={<Contact />}/>
              <Route path='/producto' element={<Product />}/>
              <Route path=''/>            
          </Routes>

      </BrowserRouter>
  );
}

export default App;
