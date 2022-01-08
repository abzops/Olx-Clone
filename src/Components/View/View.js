import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../store/PostContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import firebase from "firebase";
import "./View.css";
import { AuthContext } from "../../store/Context";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const { userId } = postDetails;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);
  return (
    <div id="container" className="_3FF3q">
      <Header />
      <main className="_1_dLE _20mSp">
        <div className="_1U6Yu _2nuC5 _54cvx">
          <div data-aut-id="itemComponent" className="rui-jAIPe _3pMvg">
            <div className="" style={{ display: "flex" }}>
              <div
                className="rui-eJl9O rui-wybRG rui-dOH8s rui-27muF rui-2MigZ rui-33FUR "
                style={{ width: "235%" }}
              >
                <div className="rui-1SRev _1Bqyd" tabindex="0" role="button">
                  <div className="rui-2CYS9 _1v0ED">
                    <div className="_2rkdc">
                      <div className="slick-slider _379bl slick-initialized">
                        <div className="slick-list">
                          <div className="slick-track">
                            <div
                              data-index="0"
                              className="slick-slide slick-active slick-current"
                              tabindex="-1"
                              aria-hidden="false"
                            >
                              <div>
                                <div tabindex="-1">
                                  <div className="_2W83m">
                                    <figure>
                                      <img
                                        title="Bottle craft"
                                        alt="Bottle craft"
                                        src={postDetails.url}
                                        className="_39P4_"
                                        data-aut-id="defaultImg"
                                      />
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_1GXk5">1 / 1</div>
                    <div className="_1OoMe"></div>
                    <div className="_3whvs"></div>
                  </div>
                </div>
                <section className="CBG3S">
                  <div className="rui-1SRev" tabindex="0" role="button">
                    <div className="rui-2CYS9 _31p_I">
                      <h3 data-aut-id="itemDescriptonTitle" className="">
                        <span>Description</span>
                      </h3>
                      <div data-aut-id="itemDescriptionContent">
                        <p className="">{postDetails.description}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="rui-eJl9O rui-wybRG rui-30Sko rui-27muF rui-2MigZ rui-33FUR">
                <div className="rui-1SRev _2r-Wm" tabindex="0" role="button">
                  <div className="rui-2CYS9">
                    <section className="_2wMiF">
                      <span data-aut-id="itemPrice" className="_2xKfz">
                        ₹ {postDetails.price}
                      </span>
                      <h1 data-aut-id="itemTitle" className="_3rJ6e">
                        {postDetails.title}
                      </h1>
                      <div className="_2kqti">
                        <div data-aut-id="itemLocation" className="_1uzVV">
                          <div className="_2A3Wa">
                            <span className="_2FRXm">
                              {postDetails.neighbourhood}, {postDetails.city},{" "}
                              {postDetails.state}
                            </span>
                          </div>
                        </div>
                        <div data-aut-id="itemCreationDate" className="_2DGqt">
                          <span>{postDetails.createdAt}</span>
                        </div>
                      </div>
                    </section>
                    <div className="_3Y_Le">
                      <button
                        type="button"
                        className="rui-1rYgw rui-82PI3"
                        role="button"
                        tabindex="0"
                        data-aut-id="btnShare"
                        title="Share"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          className=""
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="rui-1rYgw"
                        role="button"
                        tabindex="0"
                        data-aut-id=""
                        title="Favourite"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          className=""
                          fillRule="evenodd"
                        >
                          <path
                            className="rui-4K4Y7"
                            d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rui-1SRev YpyR-" tabindex="0" role="button">
                  <div className="rui-2CYS9">
                    <div className="SThIS">
                      <div data-aut-id="profileTitle" className="_3ir-l">
                        Seller description
                      </div>
                      <div className="_1oSdP" data-aut-id="profileCard">
                        {userDetails && (
                          <>
                            <a rel="nofollow">
                              <figure className="rui-1gV1x _186ru">
                                <svg
                                  width="68px"
                                  height="68px"
                                  viewBox="0 0 68 68"
                                  version="1.1"
                                >
                                  <circle
                                    fill="#002f34"
                                    width="68"
                                    height="68"
                                    cx="34"
                                    cy="34"
                                    r="34"
                                  />
                                  <text
                                    x="50%"
                                    y="50%"
                                    style={{
                                      color: "#ffffff",
                                      lineHeight: "1",
                                      fontFamily:
                                        "ubuntu,Helvetica,Arial,sans-serif",
                                    }}
                                    alignment-baseline="middle"
                                    text-anchor="middle"
                                    font-size="27"
                                    font-weight="600"
                                    dy=".1em"
                                    dominant-baseline="middle"
                                    fill="#ffffff"
                                  >
                                    {userDetails.username[0]}
                                  </text>
                                </svg>
                              </figure>
                            </a>
                            <div className="_224W6">
                              <a rel="nofollow">
                                <div className="_3oOe9">
                                  {userDetails.username}
                                </div>
                                <span className="_3QXmp">
                                  <svg
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 1024 1024"
                                    data-aut-id="icon"
                                    className=""
                                    fillRule="evenodd"
                                  >
                                    <path
                                      className="rui-4K4Y7"
                                      d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                              <div className="_3AdUv">
                                <div data-aut-id="memberSince">
                                  <div className="rui-u2K6U rui-2p-vC rui-38RAu rui-1O2Hi">
                                    <span>
                                      Member since{" "}
                                      <span>
                                        {userDetails.joined[4]}
                                        {userDetails.joined[5]}
                                        {userDetails.joined[6]}
                                      </span>{" "}
                                      <span>
                                        {userDetails.joined[11]}
                                        {userDetails.joined[12]}
                                        {userDetails.joined[13]}
                                        {userDetails.joined[14]}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <button
                        type="button"
                        data-aut-id="btnChat"
                        className="rui-39-wj rui-3evoE rui-1JPTg rui-2NuAg"
                      >
                        <span>Chat with seller</span>
                      </button>
                    </div>
                    <section
                      className="_1p1Lq"
                      data-aut-id="callToActionCard"
                    ></section>
                  </div>
                </div>
                <div className="rui-1SRev enuZF" tabindex="0" role="button">
                  <div className="rui-2CYS9">
                    <h3 className="_176bN">Posted in</h3>
                    <div className="_2A3Wa">
                      <span className="_2FRXm">
                        {postDetails.neighbourhood}, {postDetails.city},
                        {postDetails.state}
                      </span>
                    </div>
                    <div
                      className="rui-2BUoa YYU0x"
                      data-aut-id=""
                      aria-hidden="true"
                    >
                      <img
                        src="https://maps.googleapis.com/maps/api/staticmap?center=11.269%2C76.238&amp;language=en-IN&amp;size=640x256&amp;zoom=15&amp;scale=1&amp;lang=en-IN&amp;channel=olx-latam-ar-web-dev&amp;key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&amp;signature=f9nbZymJs_UtTgFnIHgqH1bHXPI="
                        alt="google map"
                      />
                    </div>
                  </div>
                </div>
                <div className="fr4Cy">
                  <strong>AD ID {postDetails.id}</strong>
                  <p className="_2yP1W">Report this ad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default View;
