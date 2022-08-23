import Head from 'next/head'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function Home() {
  SwiperCore.use([Autoplay])
  return (
      <>
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

        <div className="container sc-section">
          <div className="sc-sec__desc">
            <h1>Increase your <br /> followers on <br /> social media</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessings.
              Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button type="button" className="btn sc-custom__btn btn-get__started">Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            <div className="sc-followers">
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/2d" alt="img1" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/3d" alt="img2" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/e0" alt="img3" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/19fd" alt="img4" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/15e" alt="img5" />
              </div>
              <div className="sc-followers_img">
                <img src="./assets/social-media-assets/ad" alt="img6" />
              </div>
              <div className="sc-followers_img">12k+</div>
            </div>
            <p className="sc-followers-para">12000+ people already joined the arshakir's increase followers plan. Get started today!</p>
          </div>
          <img src="./assets/social-media-assets/Image.png" alt="sc_image" className="sc-section1__img" />
        </div>
        <hr className="border border-gray" />
        {/* Swiper section ******************************* */}
        <div className="sc-swiper__section">
          <h6 className="">Trusted By Over 100+ Startups and freelance business</h6>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints= {{
              767: {
                slidesPerView: 3
              },
              992: {
                slidesPerView: 5
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 12
              },
              1400: {
                slidesPerView: 7,
                spaceBetween: 16
              }
            }}
            autoplay= {{
              delay:2000
            }}
            className="sc-swiper__slide1"
          >
            <SwiperSlide><img src="./assets/social-media-assets/logos/openzip.png" alt="icon1" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/oracle.png" alt="icon2"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/morphes.png" alt="icon3"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/samsung.png" alt="icon4"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/monday.png" alt="icon5" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/segment.png" alt="icon6" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/pronet.png" alt="icon7" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/openzip.png" alt="icon1" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/oracle.png" alt="icon2"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/morphes.png" alt="icon3"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/samsung.png" alt="icon4"/></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/monday.png" alt="icon5" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/segment.png" alt="icon6" /></SwiperSlide>
            <SwiperSlide><img src="./assets/social-media-assets/logos/pronet.png" alt="icon7" /></SwiperSlide>
          </Swiper>
        </div>
      </>
      )
}
