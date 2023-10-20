import React from 'react';

function OrderSelect({ order, handleSort }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , marginLeft: '6%',marginRight: '20%',marginTop: '20px'}}>
      <label>Order</label>
      <select value={order} onChange={handleSort}  style={{ marginLeft: '132px' }}>
        <option>Display choices in Alphabetical</option>
        <option>Display choices in Time</option>
      </select>
    </div>
  );
}

export default OrderSelect;
