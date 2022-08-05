import './App.scss';
import NavBar from './components/NavBar/NavBar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Detail from './components/Pages/Detail';
import Category from './components/Pages/Categorys';

function App() {
    return (
      <BrowserRouter >
        <NavBar/>
          <Routes>            
              <Route path='/' element={<Home />}/>
              <Route path='/contacto' element={<Contact />}/>
              <Route path='/:category/' element={<Category />}/>              
              <Route path='/:category/:id' element={<Detail />}/>   
          </Routes>

      </BrowserRouter>
  );
}

export default App;
