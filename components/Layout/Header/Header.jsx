import React from 'react'

export default function Header() {
  return (
          <nav className="navbar navbar-expand-lg sc-navbar">
            <div className="container-fluid px-5 py-3">
              <a className="navbar-brand sc-navbar__brand" href="#">ARSHAKI</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 sc-navbar__lists">
                  <li class="nav-item dropdown sc-nav__list">
                    <a class="nav-link dropdown-toggle sc-navbar__link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Product
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item sc-nav__list dropdown">
                    <a class="nav-link sc-navbar__link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Packages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item sc-nav__list">
                    <a className="nav-link sc-navbar__link" href="#">Blog</a>
                  </li>
                  <li className="nav-item sc-nav__list">
                    <a className="nav-link sc-navbar__link" href="#">Testimonials</a>
                  </li>
                  <li className="nav-item sc-nav__list">
                    <button type="button" className="btn sc-custom__btn mt-lg-2 sc-sf__btn">Start Free </button>
                  </li>
                </ul>
                <button type="button" className="btn mt-lg-2 ">Sign In </button>
                
              </div>
            </div>
          </nav>
  )
}
