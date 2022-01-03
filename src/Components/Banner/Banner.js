import React from "react";

import "./Banner.css";
import Arrow from "../../assets/Arrow";

function Banner() {
  //const [Like, setLike] = useState(false)
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="menuBarChild">
            <div className="categoryMenu">
              <span className="span1">
                <span>ALL CATEGORIES</span>
              </span>
              <span className="downArrow">
                <button className="arrowBtn">
                  <Arrow></Arrow>
                </button>
              </span>
            </div>

            <div className="otherQuickOptions">
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/cars_c84"
                >
                  <span>Cars</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/motorcycles_c81"
                >
                  <span>Motorcycles</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/mobile-phones_c1453"
                >
                  <span>Mobile Phones</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/for-sale-houses-apartments_c1725"
                >
                  <span>For Sale: Houses &amp; Apartments</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/scooters_c1413"
                >
                  <span>Scooters</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/commercial-other-vehicles_c85"
                >
                  <span>Commercial &amp; Other Vehicles</span>
                </a>
              </div>
              <div className="links">
                <a
                  className="links-aTag"
                  rel=""
                  data-aut-id=""
                  href="/for-rent-houses-apartments_c1723"
                >
                  <span>For Rent: Houses &amp; Apartments</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="bannerChild">
          <button className="bannerButton">Sell Car</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
