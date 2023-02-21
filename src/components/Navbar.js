// import React, { Component } from 'react'
import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

// export class Navbar extends Component {
// converting to function based components
const Navbar = () => {

    // render() { //used in class based components
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark ">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white fw-bolder" to="/">DailyNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li> */}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/business"> Business</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/entertainment"> Entertainment</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/sports"> Sports</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/health"> Health</Link></li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to="/general"> General</Link></li> */}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/technology"> Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    // }
}

export default Navbar
