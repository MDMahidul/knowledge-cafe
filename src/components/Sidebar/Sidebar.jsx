import React, { useEffect, useState } from 'react';
import '../Sidebar/Sidebar.css'

const Sidebar = ({data,bookmarked,countBookmark,readTime,cart}) => {
    const [spentTime,setSpentTime] = useState(readTime);

     useEffect(() => {
       const getWatchTimeFromStorage = localStorage.getItem("readTime");
       setSpentTime(getWatchTimeFromStorage);
     }, [readTime]);


    return (
      <>
        <div className="spent-time text-center mb-3">
          <p className="">
            Spent time on read : {spentTime ? spentTime : 0} min
          </p>
        </div>
        <div className="sidebar-container">
          <div className="">
            <div className="">
              <p className="bookmarked-count p-3">
                Bookmarked Blogs: {countBookmark}
              </p>
              <div>
                <p className="bmarked-title">
                  {cart.map((b) => (
                    <span className="card m-3 mb-3" key={b.id}>
                      {b.blogTitle}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Sidebar;