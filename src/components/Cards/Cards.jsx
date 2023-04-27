import React from 'react';
import { useEffect, useState } from "react";
import Sidebar from '../Sidebar/Sidebar';
import SingleCard from '../SingleCard/SingleCard';
import { ToastContainer, toast } from "react-toastify";

const Cards = () => {
  const [bookmarked, setbookmarked] = useState([0]);
  const [countBookmark, setCountBookmark] = useState([]);
  const [data, setData] = useState([]);
  const [readTime,setReadTime] = useState([]);
  const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch(`data.json`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("blogIds"));
      const savedCart = [];
      //step-1: get id of the added Player
      for (const id in storedCart) {
        //step-2: get player from the player by using id
        const addedPlayer = data.find((blog) => blog.id === id);
        //step-3: add quantity
        if (addedPlayer) {
          const quantity = storedCart[id];
          addedPlayer.quantity = quantity;

          savedCart.push(addedPlayer);
        }
        setCart(savedCart);
      }
    }, [data]);

    const handleBookMarked = (id) => {
      const existingIds = JSON.parse(localStorage.getItem("blogIds")) || [];
      if (!existingIds.includes(id)) {
        const updatedIds = [...existingIds, id];
        localStorage.setItem("blogIds", JSON.stringify(updatedIds));
        setbookmarked(updatedIds);
        toast("Bookmarked ");
      } else {
        toast("Already Bookmarked !");
      }
    };

    const handleReadingTime = (time)=>{
        const previouseReadTime = JSON.parse(localStorage.getItem("readTime"));
        if(previouseReadTime){
            const sum = previouseReadTime + time;
            localStorage.setItem("readTime",sum);
            setReadTime(sum);
        }else{
            localStorage.setItem("readTime",time);
            setReadTime(time);
        }
    }

    useEffect(() => {
      const count = JSON.parse(localStorage.getItem("blogIds")) || [];
      setCountBookmark(count.length);
    }, [bookmarked]);
    return (
      <>
        <div className="row">
          <div className=" col-md-8 card-container">
            {data.map((article) => (
              <SingleCard
                key={article.id}
                article={article}
                handleBookMarked={handleBookMarked}
                handleReadingTime={handleReadingTime}
              ></SingleCard>
            ))}
          </div>
          <div className="col-md-4 card">
            <Sidebar
              bookmarked={bookmarked}
              countBookmark={countBookmark}
              data={data}
              readTime={readTime}
              cart={cart}
            ></Sidebar>
          </div>
        </div>
      </>
    );
};

export default Cards;