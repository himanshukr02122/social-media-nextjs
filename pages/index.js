import Head from 'next/head'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

const IncreaseFollowers=(props)=> {
  return(
    <>
      <img src="./assets/social-media-assets/icons/secure.png" alt="100% secure"/>
      <h3 className="fw-normal">100% Secure</h3>
      <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatem excepturi non magni possimus dicta optio at soluta eveniet laudantium!</p>
    </>
  );
}

export default function Home() {
  SwiperCore.use([Autoplay])
  return (
      <>
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
        <hr className="border m-0"/>
        <img src="./assets/social-media-assets/Decore.png" alt="decore" style={{width:"100%"}} />
        <div className="container">
            <h3 className="mt-5 fw-normal col-5">One platform to increase followers on all social media.</h3>
            <div className="row">
              <div className="col-3">
                <IncreaseFollowers />
              </div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
        </div>
      </>
      )
}
