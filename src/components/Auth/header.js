import React from 'react'
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    // <div>Header</div>
    <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              😎
             Hackathon Event Approval
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={"/categories"}  data-bs-toggle="dropdown" >
                Events
              </Link>
              <ul className="dropdown-menu">
              <li>
              <Link className="dropdown-item" to={"/categories"}>All Categories</Link>
              </li>
             
              </ul>

            </li>
                <>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
             
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header