import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Login from "../Login/Login";
import UserNav from "../UserNav/UserNav";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import { AuthContext } from "../../store/Context";
function Header(_props) {
  const [UserDD, setUserDD] = useState(false);
  const [place, setPlace] = useState("Nilambur, Kerala");
  const [show2, setShow2] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [changeLang, setChangeLang] = useState(" English ");
  const [tick, setTick] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header className="mainHeader">
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <a>
              <OlxLogo />
            </a>
          </div>

          <div
            className="input"
            onClick={() => {
              setShow2(!show2);
            }}
          >
            <div className="inputChild">
              <div className="_18aBn">
                <div style={{ display: "flex" }}>
                  <div className="_3hLH0">
                    <div data-aut-id="locationBox" className="_3B6d0">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        fillRule="evenodd"
                      >
                        <path
                          className="rui-4K4Y7"
                          d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                        ></path>
                      </svg>
                      <input
                        className="_2xvhw"
                        placeholder="Search city, area or locality"
                        value={place}
                      />
                      <span className="_1fwdq">
                        <button
                          type="button"
                          className="rui-1rYgw"
                          role="button"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 1024 1024"
                            data-aut-id="icon"
                            fillRule="evenodd"
                            style={{
                              transform: show2 ? "rotate(180deg)" : null,
                              transition: "transform 500ms ease",
                            }}
                          >
                            <path
                              className="rui-4K4Y7"
                              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="zYZEU">
                  <div className="_2C0uj">
                    <form role="search" className="rui-1Azjs _20jkh">
                      <button
                        type="submit"
                        aria-label="search"
                        data-aut-id="btnSearch"
                      ></button>
                      <fieldset>
                        <div>
                          <input
                            type="text"
                            placeholder="Find Cars, Mobile Phones and more..."
                            value=""
                            data-aut-id="searchBox"
                          />
                        </div>
                      </fieldset>
                      <button
                        type="reset"
                        aria-hidden="true"
                        aria-label="reset"
                      ></button>
                      <button type="button" aria-label="show search"></button>
                    </form>
                  </div>
                </div>
                <div data-aut-id="btnSearch" className="_3b3oR">
                  <span>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 1024 1024"
                      data-aut-id="icon"
                      fillRule="evenodd"
                    >
                      <path
                        className="rui-2lrc2"
                        d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* location select input dropdown style */}

          <div className="dropdown-div ">
            {show2 ? (
              <div className="location-root">
                <div className="current-location">
                  <div className="locationItem">
                    <span className="_164_b _1k7ch" role="listbox" id="N5UMO">
                      <svg
                        width="48px"
                        height="48px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        fillRule="evenodd"
                      >
                        <path
                          fill="#3a77ff"
                          d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"
                        ></path>
                      </svg>
                    </span>
                    <div className="current-location-main">
                      <div className="current-location-sub">
                        <span>Use current location</span>
                      </div>
                      <span className="_3Aqq7">
                        Location blocked.Check browser/phone settings.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="J5Oaw">
                  <div className="_394vO">
                    <span>Recent locations</span>
                  </div>
                  <div>
                    <div
                      data-aut-id="locationItem"
                      className="_1jtbH"
                      onClick={() => {
                        setPlace("Tamilnadu");
                      }}
                    >
                      <span className="_164_b _1k7ch" role="listbox">
                        <svg
                          width="48px"
                          height="48px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_3z-s0">
                        <span>Tamil Nadu</span>
                      </div>
                    </div>
                    <div
                      data-aut-id="locationItem"
                      className="_1jtbH"
                      className="_1jtbH"
                      onClick={() => {
                        setPlace("India");
                      }}
                    >
                      <span className="_164_b _1k7ch" role="listbox">
                        <svg
                          width="48px"
                          height="48px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_3z-s0">
                        <span>India</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="J5Oaw">
                  <div className="_394vO">
                    <span>POPULAR LOCATIONS</span>
                  </div>
                  <div>
                    <div
                      data-aut-id="locationItem"
                      className="_1jtbH"
                      onClick={() => {
                        setPlace("Muthukadu");
                      }}
                    >
                      <span className="_164_b _1k7ch" role="listbox">
                        <svg
                          width="48px"
                          height="48px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span>Muthukadu</span>
                      </div>
                    </div>
                    <div
                      data-aut-id="locationItem"
                      className="_1jtbH"
                      onClick={() => {
                        setPlace("VIP Colony");
                      }}
                    >
                      <span className="_164_b _1k7ch" role="listbox">
                        <svg
                          width="48px"
                          height="48px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span>VIP Colony</span>
                      </div>
                    </div>
                    <div
                      data-aut-id="locationItem"
                      className="_1jtbH"
                      onClick={() => {
                        setPlace("Nilambur Kovilakam");
                      }}
                    >
                      <span className="_164_b _1k7ch" role="listbox">
                        <svg
                          width="48px"
                          height="48px"
                          viewBox="0 0 1024 1024"
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_3z-s0">
                        <span>Nilambur Kovilakam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* language div*/}

            <div className="_2L_dh">
              <div className="_2PDEF">
                <div
                  className="UFSX5"
                  onClick={() => {
                    setShowLang(!showLang);
                  }}
                >
                  <span className="_38j0w">{changeLang}</span>
                  <span className="_2t8tU">
                    <button type="button" className="rui-1rYgw">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 1024 1024"
                        fill-rule="evenodd"
                        onClick={() => {
                          setTick(!tick);
                        }}
                        style={{
                          transform: tick ? "rotate(180deg)" : null,
                          transition: "transform 500ms ease",
                        }}
                      >
                        <path
                          className="rui-4K4Y7"
                          d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
              <div className="_2dtTP">
                {showLang ? (
                  <div className="_3Wfs8 _2Jv6i">
                    <ul>
                      <li
                        onClick={() => {
                          setChangeLang("English");
                          setTick(!tick);
                        }}
                      >
                        <span>English</span>
                      </li>
                      <li
                        onClick={() => {
                          setChangeLang("हिंदी");
                        }}
                      >
                        <span>हिंदी</span>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            {/* login and sell button div */}
            <div class="_14lZ9 _110yh" data-aut-id="actionButtons">
              {user ? (
                <>{UserDD ? <UserNav /> : null}</>
              ) : (
                <Login trigger={showLogin} setTrigger={setshowLogin} />
              )}
              <button
                type="button"
                data-aut-id="btnLogin"
                class="rui-39-wj rui-3-PNI rui-1JPTg RgSo4 _1oFFI"
                onClick={() => {
                  setshowLogin(true);
                  setUserDD(!UserDD);
                }}
              >
                <span>{user ? user.displayName : "Login"}</span>
              </button>
              <a class="_21nYN" rel="" data-aut-id="btnSell" href="/en-in/post">
                <svg
                  width="104"
                  height="48"
                  viewBox="0 0 1603 768"
                  class="_3V9PS"
                >
                  <g>
                    <path
                      class="_2bClX _12yOz"
                      d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                    ></path>
                    <path
                      class="_2bClX _YBz-"
                      d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                    ></path>
                    <path
                      class="_2bClX _3uYj7"
                      d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                    ></path>
                    <path
                      class="_2bClX BfroU"
                      d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                    ></path>
                  </g>
                </svg>
                <div class="DrSmZ">
                  <span class="EgzsJ">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 1024 1024"
                      data-aut-id="icon"
                      class=""
                      fill-rule="evenodd"
                    >
                      <path
                        class="rui-l7uK1"
                        d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"
                      ></path>
                    </svg>
                  </span>
                  <span>Sell</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
