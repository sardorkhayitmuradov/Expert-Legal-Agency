import React from 'react';
import './Notorious.css'

const Notorious = ({ label, image , desc, buttonName }) => {
  return (
    <div className='search_card_1_left'>
      <div className='search_card_1_img'>
        <img src={image} alt='Error' />
        <h3>{label}</h3>
      </div>
      <div className='search_card_1_left_desc'>
        <p>
          {desc}
        </p>
      </div>
      <div className='search_card_1_left_btn'>
        <button>{buttonName}</button>
      </div>
    </div>
  );
};

export default Notorious;
