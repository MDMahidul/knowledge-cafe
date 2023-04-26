import React, { useState } from 'react';
import '../Sidebar/Sidebar.css'

const Sidebar = () => {
    const [spentTime,setSpentTime] = useState([0]);
    const [bookmarked,setbookmarked] = useState([0]);
    return (
        <>
        <div className="spent-time text-center mb-3">
            <p className=''>Spent time on read : {spentTime} min</p>
        </div>
        <div className='sidebar-container'>
        <div className=''>
                <div className=''>
                    <p className='bookmarked-count p-3'>Bookmarked Blogs: {bookmarked}</p>
                    <div className="card m-3 mb-3">
                        <p className='bmarked-title'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
        </div>
        </div>
        </>
    );
};

export default Sidebar;