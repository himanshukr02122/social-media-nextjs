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
      <div className="sc-testinomial__card-icon"><i className="fa-solid fa-quote-left"></i></div>
      <div className="sc-testimonial__ratings">
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
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
        <section className="sc-section pt-0">
          <div className="container sc-banner">
            <div className="row">
              <div className="col-xxl-5">
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
              </div>
              <div className="col">
                <img src="./assets/social-media-assets/Image.png" alt="sc_image" className="sc-section1__img" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="border-1 border-bottom border-top sc-section">
          <div className="container sc-swiper__section">
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
        </section>
        
        {/* <hr className="border m-0"/> */}
        {/* Increase followers section ************************************ */}

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

              {/* active followers section *************************************** */}
        
        <section className="sc-section">
          <div className="container">
            <div className="sm-active__followers row gap-5">
            <div className="sc-start__free col-12 col-sm-6 d-flex flex-column">
              <h2 className="mb-md-1 mb-xl-2 fw-normal">Get thousands of active followers</h2>
              <p>Yet bed any for travelling assistance indulgence unpleasing.
                Not thoughts all exercise blessings.
                Indulgence way everything joy alteration boisterous the attachment.
              </p>
              <button type="button" className="btn sc-custom__btn btn-start__free mt-lg-2">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div className="col">
              <img src="./assets/social-media-assets/Group 317.png" alt="social media" className="img-fluid"/>
            </div>
            </div>
          </div>
        </section>
        
        {/* active users section ****************************** */}
        <section className="sc-section">
          <div className="container">
            <div className="sm-active__followers row gap-5">
              <div className="col">
                <img src="./assets/social-media-assets/Group 3.png" alt="social media" className="img-fluid"/>
              </div>
              <div className="sc-start__free col-12 col-sm-6 d-flex flex-column">
                <h2 className="mb-md-1 mb-xl-2 fw-normal">Daily active users on social media</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing.
                  Not thoughts all exercise blessings.
                  Indulgence way everything joy alteration boisterous the attachment.
                </p>
                <button type="button" className="btn sc-custom__btn btn-start__free mt-lg-2">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </section>
        
        {/*testinomial section ********************************** */}

        <section className="sc-section">
          <div className="container sc-testimonial text-center">
            <span className="sc-testimonial__title">TESTIMONIAL</span>
            <h2 className="fw-normal my-4 fs54px">What Our Happy User</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints= {{
                767: {
                  slidesPerView: 2
                },
                1200: {
                  slidesPerView: 3.5,
                },
                1400: {
                  slidesPerView: 5,
                }
              }}
              autoplay= {{
                delay:3000
              }}
              className="sc-swiper__slide2 mt-5"
            >
              <SwiperSlide><TestinomialCard name="Serhiy Hipskyy" imgSrc="serhiy" /></SwiperSlide>
              <SwiperSlide><TestinomialCard name="Justus Menke" imgSrc="86f8e02330ae1c246743e7bdc4ec0b25" /></SwiperSlide>
              <SwiperSlide><TestinomialCard name="Britain Eriksen" imgSrc="410d9ed01507727b08058e70403430bc" /></SwiperSlide>
              <SwiperSlide><TestinomialCard name="Justus Menke" imgSrc="serhiy" /></SwiperSlide>
              <SwiperSlide><TestinomialCard name="Britain Eriksen" imgSrc="86f8e02330ae1c246743e7bdc4ec0b25" /></SwiperSlide>
              <SwiperSlide><TestinomialCard name="Serhiy Hipskyy" imgSrc="410d9ed01507727b08058e70403430bc" /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        
        {/* Accordion section */}

        <section className="sc-section">
          <div className="container sc-accordion__section">
            <div className="row gap-4">
              <div className="col">
                <h2 className="fw-normal my-4 fs54px">Any questions? <br /> We got you.</h2>
                <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellendus fugiat porro magni at natus temporibus eius. Alias, accusamus adipisci.</p>
                <button>More FAQs <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
              <div className="col-12 col-md-6 my-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item border-0 border-bottom border-2">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button text-dark bg-transparent py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How this work?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show border-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body fw-normal fs-6 px-0 py-2">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 border-bottom border-2">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button text-dark bg-transparent py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Are there any additional fee?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body fw-normal fs-6 px-0 py-2">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom border-2 border-0">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button text-dark bg-transparent py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can I get the app?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body fw-normal fs-6 px-0 py-2">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom border-2 border-0">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button text-dark bg-transparent py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What features do you offer and other not?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body fw-normal fs-6 px-0 py-2">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* subscribe section ***************************** */}
        <section className="sc-section sc-subscribe__bgImg">
          <div className="sc-subscribe__section">
            <div id="overlay"></div>
            <div className="container">
              <div className="row">
                  <div className="col-3">
                    <div className="sc-email__block">
                    <h6 className="sc-email__h6">JOIN WITH OUR</h6>
                    <h3 className="sc-email__h3">Set your social media <br /> growth an autopilot.</h3>
                    <div className="sc-email__inner">
                      <div className="sc-email__emailBox">
                        <input type="email" name="email" id="email" placeholder="YOUR EMAIL ADDRESS" required/>
                      </div>
                      <div className="sc-subscribe__btn">
                        <button type="submit" id="subscribeBtn">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist section **********************************************************/}

        <section className="bg-black sc-section">
          <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
            <div className="sc-waitlist__heading col-11 col-sm-10 col-md-9 col-lg-8 text-center text-white">
              Join millions of creative people with Shakir
            </div>
            <button className="sc-waitlist__btn px-3 px-md-4" type="button">Join The Waitlist <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
          </div>
        </section>

      </>
      )
}
