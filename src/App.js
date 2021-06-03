import React from 'react';
import Navbar from './components/Navbar';
import Products from 'components/Products';
import CheckoutPage from 'components/CheckoutPage';

function App() {
  return (
    <div>
      <Navbar/>
      <CheckoutPage/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
