import React, { useEffect, useState } from 'react';
import '../Sidebar/Sidebar.css'

const Sidebar = ({data,bookmarked,countBookmark,readTime}) => {
    const [spentTime,setSpentTime] = useState(readTime);
    const [cart, setCart] = useState([]);

     useEffect(() => {
       const getWatchTimeFromStorage = localStorage.getItem("readTime");
       setSpentTime(getWatchTimeFromStorage);
     }, [readTime]);

     useEffect(() => {
       const storedCart = localStorage.getItem('blogIds'); 
       const savedCart = [];
       //step-1: get id of the added Player
       for (const id in bookmarked) {
         //step-2: get player from the player by using id
         const addedPlayer = data.find((blog) => blog.id === id);
         //step-3: add quantity
         if (addedPlayer) {
          // const quantity = bookmarked[id];
           //addedPlayer.quantity = quantity;

           savedCart.push(addedPlayer);
         }
         setCart(savedCart);
       }
     }, [data]);

    return (
        <>
        <div className="spent-time text-center mb-3">
            <p className=''>Spent time on read : {spentTime ? spentTime : 0} min</p>
        </div>
        <div className='sidebar-container'>
        <div className=''>
                <div className=''>
                    <p className='bookmarked-count p-3'>Bookmarked Blogs: {countBookmark}</p>
                    <div className="card m-3 mb-3">
                        <p className='bmarked-title'>{cart}</p>
                    </div>
                </div>
        </div>
        </div>
        </>
    );
};

export default Sidebar;