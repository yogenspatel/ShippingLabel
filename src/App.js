import React from 'react';
import Login from './core/components/login';
import './App.css';
import ShippingHeader from './core/components/header';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ShippingHeader />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
