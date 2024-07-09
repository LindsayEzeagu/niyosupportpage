import React from 'react';
import './Support.css';

function Support(props) {

    
  return (
    <div>
        <div className="supportHeader">
            <h3>Why Niyo Bootcamp</h3>
            <h1>Bespoke All Round</h1>
            <h1 id="support-text">Support!</h1>
        </div>
        <div className="supportGrid">
    {props.supportInfo.map((item) =>(
    <div className='supportComponent'>
    {item.icon && <img src={item.icon} alt={item.title} className="supportIcon" />}
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
    ))}  
    </div>
    </div>
  );
}
export default Support;