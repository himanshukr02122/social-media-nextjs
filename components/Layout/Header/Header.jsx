import React from 'react'

export default function Header() {
  return (
        <header className="container topBar">
          <div className="sc-toggle__buttons">
            <i className="fa-solid fa-toggle-off sc-toggleBtn" id="btnOff"></i>
            <i className="fa-solid fa-toggle-on sc-toggleBtn display-none" id="btnOn"></i>
          </div>
          <div className="pageTitle fw-bold">ARSHAKI</div>
            <ul className="sc-nav__links ">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Packages 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tesinimonials</a>
              </li>
            </ul>
          <div className="btn-set">
            <button type="button" className="btn btn-bg__light">Log in</button>
            <button type="button" className="btn sc-custom__btn outline-none">Start Free</button>
          </div>
        </header>
  )
}
