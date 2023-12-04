import React from 'react'
import './Topics.css'
import { useNavigate } from "react-router-dom"


const TopicCard = ({topic}) => {
  const navigate = useNavigate();
  function handleClick(){ 
    navigate('/NextWindow' , {state: topic});
  }
  return(
    <button onClick= {handleClick} className='topic' >
      <div>
        <img src={topic.image !== "N/A" ? topic.image : "https://via.placeholder.com/400"} alt={topic.image} />
      </div>
      <div>
        <span>{topic.name}</span>
      </div>
    </button>
  );
}

export default TopicCard;