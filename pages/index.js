import Head from 'next/head'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

const IncreaseFollowers=(props)=> {
    const imgName="./assets/social-media-assets/icons/"+props.srcUrl;
  return(
    <>
      <div style={{width:"100px", height: "50px"}}><img src={imgName} alt="100% secure" className="mb-2" />
      </div>
      <h3 className="fw-normal my-2 my-xxl-3 fs-4">{props.title}</h3>
      <p className="sc-if__para">{props.card_desc}</p>
    </>
  );
}
const TestinomialCard =(props)=> {
  const imgUrl = "./assets/social-media-assets/"+props.imgSrc;
  return(
    <div className="sc-testinomial__card border">
      <div className="sc-testinomial__card-icon"><i class="fa-solid fa-quote-left"></i></div>
      <div className="sc-testimonial__ratings">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <p className="sc-testimonial__feedback">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolorem delectus reprehenderit a totam at iure accusantium. Reiciendis.</p>
      <hr className="border mb-0" />
      <div className="sc-happy__user">
        <img src={imgUrl} alt="user image" />
        <div className="sc-user__id ">
          <span>{props.name}</span><br />
          <span>CEO Universal</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  SwiperCore.use([Autoplay])
  return (
      <>
        <div className="container sc-section">
          <div className="sc-sec__desc">
            <h1 className="mb-md-1 mb-xl-2">Increase your followers on social media</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessings.
              Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button type="button" className="btn sc-custom__btn btn-get__started mt-lg-2 ">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
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
            className="sc-swiper__slide1 container"
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
            <h3 className="mt-5 fw-normal col-12 col-sm-9 col-md-6 text-6xl">One platform to increase followers on all social media.</h3>
            <div className="row mt-5">
              <div className="col-6 col-sm-3">
                <IncreaseFollowers srcUrl="secure.png" title="100% Secure" card_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatem excepturi non magni possimus dicta optio at soluta eveniet laudantium!" />
              </div>
              <div className="col-6 col-sm-3">
                <IncreaseFollowers srcUrl="no-cookies.png" title="No Cookies Required" card_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatem excepturi non magni possimus dicta optio at soluta eveniet laudantium!" />
              </div>
              <div className="col-6 col-sm-3">
                <IncreaseFollowers srcUrl="login.png" title="Login Info Not Required" card_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatem excepturi non magni possimus dicta optio at soluta eveniet laudantium!" />
              </div>
              <div className="col-6 col-sm-3">
                <IncreaseFollowers srcUrl="moneyback.png" title="Moneyback Guarantee " card_desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptatem excepturi non magni possimus dicta optio at soluta eveniet laudantium!" />
              </div>
            </div>
        </div>
        <div className="container my-5">
          <div className="sm-active__followers row gap-5">
          <div className="sc-start__free col-12 col-sm-6 d-flex flex-column">
            <h1 className="mb-md-1 mb-xl-2 fw-normal">Get thousands of active followers</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessings.
              Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button type="button" className="btn sc-custom__btn btn-start__free mt-lg-2">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </div>
          <div className="col">
            <img src="./assets/social-media-assets/Group 317.png" alt="social media" className="img100"/>
          </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="sm-active__followers row gap-5">
          <div className="col">
            <img src="./assets/social-media-assets/Group 3.png" alt="social media" className="img100"/>
          </div>
          <div className="sc-start__free col-12 col-sm-6 d-flex flex-column">
            <h1 className="mb-md-1 mb-xl-2 fw-normal">Daily active users on social media</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
              Not thoughts all exercise blessings.
              Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button type="button" className="btn sc-custom__btn btn-start__free mt-lg-2">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </div>
          </div>
        </div>

        <div className="sc-testimonial container text-center">
          <span className="sc-testimonial__title">TESTIMONIAL</span>
          <h2 className="fw-normal my-4">What Our Happy User</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints= {{
              767: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 12
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 16
              }
            }}
            autoplay= {{
              delay:3000
            }}
            className="sc-swiper__slide2 container mt-5"
          >
            <SwiperSlide><TestinomialCard name="Serhiy Hipskyy" imgSrc="serhiy" /></SwiperSlide>
            <SwiperSlide><TestinomialCard name="Justus Menke" imgSrc="86f8e02330ae1c246743e7bdc4ec0b25" /></SwiperSlide>
            <SwiperSlide><TestinomialCard name="Britain Eriksen" imgSrc="410d9ed01507727b08058e70403430bc" /></SwiperSlide>
            <SwiperSlide><TestinomialCard name="Justus Menke" imgSrc="serhiy" /></SwiperSlide>
            <SwiperSlide><TestinomialCard name="Britain Eriksen" imgSrc="86f8e02330ae1c246743e7bdc4ec0b25" /></SwiperSlide>
            <SwiperSlide><TestinomialCard name="Serhiy Hipskyy" imgSrc="410d9ed01507727b08058e70403430bc" /></SwiperSlide>
          </Swiper>
        </div>
      </>
      )
}
