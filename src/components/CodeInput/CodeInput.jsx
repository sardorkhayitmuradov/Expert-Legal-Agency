import React, { useState } from 'react';
import '../../components/CodeInput/CodeInput.css';

const CodeInput = ({onGetCodes, code}) => {
  const handleChange = (el, index) => {
    onGetCodes(el,index);
  };
  return (
    <>
      <div className='code_inputs_parent'>
        {code?.map((el, index) => {
          return (
            <input
              className='code_input'
              type='text'
              maxLength={1}
              key={index}
              value={el}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <p>{code.join('')}</p>
    </>
  );
};

export default CodeInput;
