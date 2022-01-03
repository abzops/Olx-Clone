import React from "react";
import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";
import Twitter from "../../assets/Twitter";
import Youtube from "../../assets/Youtube";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div className="contentChild">
          <section class="contentSection">
            Popular Locations
            <ul>
              <li>
                <a class="aTag">Kolkata</a>
              </li>
              <li>
                <a class="aTag">Mumbai</a>
              </li>
              <li>
                <a class="aTag">Chenni</a>
              </li>
              <li>
                <a class="aTag">Pune</a>
              </li>
            </ul>
          </section>
          <section class="contentSection">
            TRENDING LOCATIONS
            <ul>
              <li>
                <a class="aTag">Bhubaneshwar</a>
              </li>
              <li>
                <a class="aTag">Hyderabad</a>
              </li>
              <li>
                <a class="aTag">Chandigarh</a>
              </li>
              <li>
                <a class="aTag">Nashik</a>
              </li>
            </ul>
          </section>
          <section class="contentSection">
            ABOUT US
            <ul>
              <li>
                <a class="aTag">About OLX Group</a>
              </li>
              <li>
                <a class="aTag">Careers</a>
              </li>
              <li>
                <a class="aTag">Contact Us</a>
              </li>
              <li>
                <a class="aTag">OLXPeople</a>
              </li>
              <li>
                <a class="aTag">Waah Jobs</a>
              </li>
            </ul>
          </section>
          <section class="contentSection">
            OLX
            <ul>
              <li>
                <a class="aTag">Help</a>
              </li>
              <li>
                <a class="aTag">Sitemap</a>
              </li>
              <li>
                <a class="aTag">Legal & Privacy information</a>
              </li>
            </ul>
          </section>
          <section className="contentSection social">
            <div className="followUs">
              <span>Follow Us</span>
              <div class="socialIcon">
                <a>
                  <span>
                    <Facebook />
                  </span>
                </a>
                <a>
                  <span>
                    <Instagram />
                  </span>
                </a>
                <a>
                  <span>
                    <Twitter />
                  </span>
                </a>
                <a>
                  <span>
                    <Youtube />
                  </span>
                </a>
              </div>
            </div>
            <div className="download">
              <a>
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://statics.olx.in/external/base/img/playstore.webp"
                  />
                  <img
                    src="https://statics.olx.in/external/base/img/playstore.png"
                    alt="Download OLX in the Android Play Store"
                    class="_3-lxv"
                  />
                </picture>
              </a>
              <a>
                <picture>
                  <source
                    type="image/webp"
                    srcset="https://statics.olx.in/external/base/img/appstore.webp"
                  />
                  <img
                    src="https://statics.olx.in/external/base/img/appstore.png"
                    alt="Download OLX for iOS in the Apple App Store"
                  />
                </picture>
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="footer">
        <div className="footer-child">
          <section class="footer-child-section">
            <span>Free Classifieds in India</span>. © 2006-2021 OLX
          </section>
          <section class="footer-child-section">
            <span>Other Countries</span>
            <a>Pakistan</a>
            <a>South Africa</a>
            <a>Indonesia</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
