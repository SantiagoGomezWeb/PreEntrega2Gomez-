import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Cart from './components/Main/Cart';
import PageNotFound from './components/Main/PageNotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <div className='container'>
          <div className='fondo'>
          <Navbar />
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='*' element={<PageNotFound />}/>
              {/* <div className='fondo'> */}
          </Routes>
          <Footer />
          </div> 
        </div>
      </BrowserRouter>
  );
};

export default App;
