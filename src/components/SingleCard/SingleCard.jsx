import React from 'react';
import '../SingleCard/SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({article}) => {
    const {id,blogCoverImage,blogTitle,authorName,authorImage,readTime,publishDate} = article;
    return (
        <>
           <div className="card mb-3">
                <img src={blogCoverImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='rounded-circle author-img' src={authorImage} alt="" />
                            <div>
                                <span className='author-name'>{authorName}</span><br></br>
                                <span className='publish-date'>{publishDate}</span>
                            </div>
                        </div>
                        <div>
                            <p className='read-time d-inline me-2'>{readTime} min read</p>
                            <span><FontAwesomeIcon className='b-icon' icon={faBookmark} /></span>
                        </div>
                    </div>
                    <div>
                        <h2 className='blog-title'>{blogTitle}</h2>
                        <a className='mt-3' href="#">Mar as read</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;