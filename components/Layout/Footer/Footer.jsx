import React from 'react'

export default function Footer() {
  return (
    <section className="bg-black border-2 border-bottom border-top border-dark">
        <div className="container my-5">
            <div className="row gap-5">
                <div className="col-5">
                    <span className="fw-bold text-white">AR</span>
                    <p className="text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et minima! Optio, nostrum alias? Ullam impedit vitae nemo porro repellendus alias. Pariatur enim iure reprehenderit.</p>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                          <h4 className="text-white">Company</h4>
                          <ul className="sc-footer__lists">
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">About Us</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Careers</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Blog</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Pricing</a></li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-white">Product</h4>
                          <ul className="sc-footer__lists">
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Facebook Followers</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Instagram Followers</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Twitter Followers</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">TikTok Followers</a></li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-white">Resources</h4>
                          <ul className="sc-footer__lists">
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Proposal Template</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Invoices</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">Tutorials</a></li>
                              <li className="sc-list__item my-2"><a href="#" className="sc-footer__link">How to increase activity</a></li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
