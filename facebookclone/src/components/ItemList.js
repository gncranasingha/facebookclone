import React from 'react';
import { FaEllipsisH } from 'react-icons/fa'; // Three-dot icon horizontally

const ItemList = () => {
  const items = ['Post', 'About', 'Mentions', 'Reviews', 'Follows','Photos', 'More'];

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex gap-4" style={{color:'gray', fontWeight:'bold'}}>
        {items.map((item, index) => (
          <span key={index} className="p-2">
            {item}
          </span>
        ))}
      </div>
      
      <button style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', border: 'none', borderRadius: '5px', backgroundColor: '', color: 'black' }}>
            <FaEllipsisH  />
          </button>
    </div>
  );
};

export default ItemList;
