import React from 'react';
import { useEffect, useState } from 'react'
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
      fetch(`data.json`)
      .then(res=> res.json())
      .then(data=> setData(data))
    },[])
    return (
        <>
           <div className="card-container">
            {
                data.map(article=>(
                    <SingleCard key={article.id} article={article}></SingleCard> 
                ))
            }
           </div>
        </>
    );
};

export default Cards;