import React from 'react';
import './OrderSelect.css';  // Import the CSS file

function OrderSelect({ order, handleSort }) {
  return (
    <div className="order-select-container">
      <label className="order-select-label">Order</label>
      <select value={order} onChange={handleSort} className="order-select-dropdown">
        <option>Display choices in Alphabetical</option>
        <option>Display choices in Time</option>
      </select>
    </div>
  );
}

export default OrderSelect;
