import React from 'react';
import ShippingLabelMaker from './features/shipping-label-maker';
import './App.css';

function App() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col'>
          <ShippingLabelMaker />
          </div>
        </div>
    </div>
  );
}

export default App;
