import React from 'react';
import './Progress.css';

const Progress = ({ progressIcon, progressTitle, progressDesc }) => {
  return (
    <div className='procces-header'>
      <img src={progressIcon} alt='' className='process-header-image' />
      <div className='process-header-infos'>
        <h2 className='header-title'>{progressTitle}</h2>
        <p className='header-desc'>{progressDesc}</p>
      </div>
    </div>
  );
};

export default Progress;
