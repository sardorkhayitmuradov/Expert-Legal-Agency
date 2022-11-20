import React, { useState } from 'react';
import '../../components/CodeInput/CodeInput.css';

const CodeInput = () => {
  const [code, setCode] = useState(new Array(5).fill(''));
  const handleChange = (el, index) => {
    // onGetNumber(code.join(''));
    if (isNaN(el.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? el.value : d))]);

    // Focus next input
    if (el.nextSibling) {
      el.nextSibling.focus();
    }
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
              onChange={(e) => {
                handleChange(e.target, index);
              }}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <p>{code.join('')}</p>
      {
        window.localStorage.setItem('sms_code' , code.join(''))
      }
    </>
  );
};

export default CodeInput;
