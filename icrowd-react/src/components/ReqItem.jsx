import React from 'react';
import '../css/ReqItem.css';


  const ReqItem = (props) =>
{
    return <div className='column'>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
    <p>{props.position}</p>
    </div>
}

export default ReqItem;
