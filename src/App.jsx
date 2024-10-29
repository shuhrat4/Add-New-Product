import React from 'react';
import Products from './Products';
import AddProduct from './appProduct';

function App() {
  return (
    <div className="container mx-auto">
      <AddProduct />
      <Products />
    </div>
  );
}

export default App;
