import Head from 'next/head'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
      <>
        <header className="topBar">
            <div className="sc-toggle__buttons">
              <i className="fa-solid fa-toggle-off sc-toggleBtn" id="btnOff"></i>
              <i className="fa-solid fa-toggle-on sc-toggleBtn display-none" id="btnOn"></i>
            </div>
          <div className="pageTitle fw-bold">ARSHAKIR</div>
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

        <div className="sc-section">
          <div className="sc-sec__desc col">
            <h1>Increase your <br /> followers on <br /> social media</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessings.
              Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button type="button" className="btn sc-custom__btn btn-get__started">Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            <div className="sc-followers">
              <div className="sc-followers_img">
                <img src="./assets/images/ga-RBerxXPnZPE-unsplash.jpg" alt="img1" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="img2" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/images/mahdi-chaghari-0ShQCkRWIII-unsplash.jpg" alt="img3" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="img4" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/images/mahdi-chaghari-0ShQCkRWIII-unsplash.jpg" alt="img5" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/images/ga-RBerxXPnZPE-unsplash.jpg" alt="img6" />
              </div>
              <div className="sc-followers_img">12k+</div>
            </div>
            <p className="sc-followers-para">12000+ people already joined the arshakir's increase followers plan. Get started today!</p>
          </div>
          <div className="sc-sec__img">
            <img src="./assets/images/georgia-de-lotz-Ebb8fe-NZtM-unsplash.jpg" alt="sc_image" />
          </div>
        </div>
        <div className="sc-swiper__section">
          <h6 className="">Trusted By Over 100+ Startups and freelance business</h6>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
          >
            <SwiperSlide><img src="assets/icons/OZ_logo_color (3)-1.webp" alt="icon1" /></SwiperSlide>
            <SwiperSlide><img src="assets/icons/oracle-512.webp" alt="icon2"/></SwiperSlide>
            <SwiperSlide><img src="assets/icons/download.png" alt="icon3"/></SwiperSlide>
            <SwiperSlide><div>SAMSUNG</div></SwiperSlide>
            
            <SwiperSlide><img src="assets/icons/download(1).png" alt="icon5" /></SwiperSlide>
          </Swiper>
        </div>
      </>
      )
}
