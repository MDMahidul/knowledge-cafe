import React from 'react';

const Header = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2" href="#"><span className='text-info'>Knowledge</span><span className='text-warning'> Cafe</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link" href="#">Blog</a>
                    </div>
                    </div>
                </div>
            </nav> 
        </>
    );
};

export default Header;