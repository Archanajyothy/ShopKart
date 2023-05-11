import React from 'react';
import './checkout.css'

export const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address"></textarea>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};
