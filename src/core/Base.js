import React, { Component } from 'react';

import "../styles.css"
import Menu from './Menu';
import img from '../assests/login.jpg'

const Base=({

        title="MY Title",
        description="My Description",

        className="text-white p-4",
        children

        }) =>(
    
    <div>
        <Menu/>
        <div className="container" style={{backgroundImage: `url('${img}') no-repeat center`}}>
            <div className="  text-white text-center">
                <h2 className="display-4">
                 {title}
                </h2>
                <p className="lead">{description}</p>
            </div>

            <div className={className}>{children}</div>
        </div>
    <footer className = "footer  mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
            <h4>If you got any question feel free to reach out</h4>
            <button  className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        <div className="conatiner">
            <span className="text-muted">
                An Amazing MERN Course
            </span>

        </div>
    </footer>
    </div>
);

export default Base;