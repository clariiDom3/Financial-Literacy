import React from 'react';
import './Topics.css';
import { useLocation } from 'react-router-dom';
import BudgetSheet from './BudgetSheet';

function TopicsPage() {
  const location = useLocation();
  const { id, name, image, info} = location.state;
  const infoLines = info.split('\n');


  return (
    <div className='wholeApp'>
        <div className='name-and-image'>
            <h1 className='centered'>{name}</h1>
            <img src={image} alt={name} className='profile-image' />
        </div>
      <div className='info-container'>
        {infoLines.map((line, index) => (
          <p key={index}className='info-paragraph'>{line}</p>
        ))}
        {id === 1 ? (
          <div>
            <BudgetSheet />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default TopicsPage;