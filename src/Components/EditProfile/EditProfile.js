import React, { useContext, useEffect, useState } from "react";
import "./EditProfile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import firebase from "firebase";
import { AuthContext } from "../../store/Context";
import { Link } from "react-router-dom";
function EditProfile() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [Dp, setDp] = useState("");
  const [userDetails, setUserDetails] = useState();
  console.log(user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .firestore()
        .collection("users")
        .where("id", "==", user.uid)
        .get()
        .then((data) => {
          let userData = [];

          data.forEach((doc) => {
            userData.push({
              joined: doc.data().joined,
              username: doc.data().username,
              phoneNumber: doc.data().phone,
            });
          });
          console.log(userData[0]);
          setUserDetails(userData[0]);
        });
    });
  }, []);

  const handleSubmit = () => {
    setDp(null);
    setShowLoading(true);
    firebase
      .storage()
      .ref(`/usersDp/${Dp.name}`)
      .put(Dp)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          firebase.auth().onAuthStateChanged((user) => {
            user
              .updateProfile({
                photoURL: url,
              })
              .then(
                console.log("user authentication completed"),
                setShowLoading(false),
                setShowPopUp(true)
              );
          });
        });
      });
  };

  return (
    <>
      <div className="wow">
        <Header />
        {showPopUp && (
          <div className="rui-3edbr Bv1yc">
            <div className="SJzZq" id="SJzZq">
              <h1
                className="o_CSw"
                id="o_CSw"
                style={{ textTransform: "uppercase" }}
              >
                Your ad was successfully posted!
              </h1>

              <svg
                class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <Link to={"/"}>
                <button
                  type="button"
                  className="rui-39-wj rui-3mpqt rui-1JPTg _3bFmz"
                >
                  Done
                </button>
              </Link>
            </div>
          </div>
        )}
        {showLoading ? (
          <div className="rui-3edbr Bv1yc">
            <div className="SJzZq" id="SJzZq2">
              <h1
                className="o_CSw"
                id="o_CSw"
                style={{ textTransform: "uppercase" }}
              >
                just a moment
              </h1>

              <svg
                class="checkmark"
                version="1.1"
                id="L2"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
              >
                <circle
                  fill="none"
                  stroke="#002f34"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  cx="50"
                  cy="50"
                  r="48"
                />
                <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#002f34"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="85"
                  y2="50.5"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </line>
                <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#002f34"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="49.5"
                  y2="74"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="15s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>
            </div>
          </div>
        ) : null}
        <main class="_1_dLE _2yGlg">
          <div class="_1U6Yu _2nuC5">
            <section data-aut-id="editProfile" class="_1GmUa">
              <div
                class="rui-3gsfa rui-21NjD rui-1fOtL rui-WqATt"
                style={{ marginTop: "60px" }}
              >
                <div class="rui-2NPn- rui-mQmOs">
                  <div class="_3CF4o" data-aut-id="userCard">
                    <div class="_1HszL" data-aut-id="userInfo">
                      <figure
                        class="rui-1gV1x"
                        style={{
                          width: "184px",
                          height: "184px",
                          backgroundImage: `url(${
                            user.photoURL
                              ? user.photoURL
                              : " https://statics.olx.in/external/base/img/avatar_1.png"
                          })`,
                        }}
                      >
                        <div
                          class="rui-1wy7R"
                          tabindex="0"
                          role="button"
                          style={{ height: "61.3333px" }}
                        >
                          <input
                            accept="image/png, image/jpeg"
                            type="file"
                            multiple=""
                            id="dp"
                            autoComplete="off"
                            onChange={(e) => {
                              setDp(e.target.files[0]);
                            }}
                            style={{ display: "none" }}
                          />
                          <label htmlFor="dp">
                            <svg
                              width="46px"
                              height="46px"
                              viewBox="0 0 1024 1024"
                              data-aut-id="icon"
                              class=""
                              fill-rule="evenodd"
                            >
                              <path
                                class="rui-1kebF"
                                d="M822.315 85.333l-76.843 77.355 116.309 117.035 76.885-77.312v-33.835l-82.773-83.243h-33.579zM193.92 178.048l-108.587 109.269v542.123l108.587 109.227h538.624l108.587-109.269v-274.603l-47.019-36.139-47.019 36.139v235.349l-53.547 53.888h-460.629l-53.589-53.845v-463.573l53.589-53.973h230.272l30.592-42.581-30.592-52.053h-269.269zM309.291 601.643v117.035h116.309l400.939-403.499-116.352-117.035-400.896 403.499z"
                              ></path>
                            </svg>
                          </label>
                        </div>
                      </figure>
                    </div>
                    <div class="_2fQ2P" data-aut-id="friends">
                      <div class="_12yg3">
                        <div class="rui-u2K6U rui-6BzOY rui-2Mm6c rui-293In rui-2jBR-">
                          <span>friends</span>
                        </div>
                      </div>
                      <div class="_2qVza">
                        <div class="_8F1JI" data-aut-id="followersButton">
                          <span>
                            <span>Followers</span>
                          </span>
                          <span class="_2QR9Q"> 0 </span>
                        </div>
                        <div class="_8F1JI" data-aut-id="followingButton">
                          <span>
                            <span>Following</span>
                          </span>
                          <span class="_2QR9Q" data-aut-id="friendsItemNumber">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="enADb" data-aut-id="verifiedAccount">
                      <div class="_2tbys">
                        <div class="rui-u2K6U rui-6BzOY rui-2Mm6c rui-293In">
                          <span>Linked accounts</span>
                        </div>
                      </div>
                      <div class="a_xFX">
                        <div class="_1IG2d">
                          <span>
                            <span>Google</span>
                          </span>
                          <span class="_3zo8X">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 1024 1024"
                              data-aut-id="icon"
                              class=""
                              fill-rule="evenodd"
                            >
                              <path
                                class="rui-4K4Y7"
                                d="M744.727 450.484v-54.846h-54.846l-216.669 216.669-100.305-100.305h-54.846v54.846l127.728 127.728h54.846l244.092-244.092zM512 162.911c-192.485 0-349.091 156.606-349.091 349.091s156.606 349.091 349.091 349.091c192.485 0 349.091-156.606 349.091-349.091s-156.606-349.091-349.091-349.091v0zM512 938.669c-235.268 0-426.667-191.399-426.667-426.667s191.399-426.667 426.667-426.667c235.268 0 426.667 191.399 426.667 426.667s-191.399 426.667-426.667 426.667v0z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div class="_1IG2d">
                          <span>
                            <span>Phone Number</span>
                          </span>
                          <span class="_3zo8X">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 1024 1024"
                              data-aut-id="icon"
                              class=""
                              fill-rule="evenodd"
                            >
                              <path
                                class="rui-4K4Y7"
                                d="M744.727 450.484v-54.846h-54.846l-216.669 216.669-100.305-100.305h-54.846v54.846l127.728 127.728h54.846l244.092-244.092zM512 162.911c-192.485 0-349.091 156.606-349.091 349.091s156.606 349.091 349.091 349.091c192.485 0 349.091-156.606 349.091-349.091s-156.606-349.091-349.091-349.091v0zM512 938.669c-235.268 0-426.667-191.399-426.667-426.667s191.399-426.667 426.667-426.667c235.268 0 426.667 191.399 426.667 426.667s-191.399 426.667-426.667 426.667v0z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div class="_1IG2d">
                          <span>Email</span>
                          <span class="_3zo8X">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 1024 1024"
                              data-aut-id="icon"
                              class=""
                              fill-rule="evenodd"
                            >
                              <path
                                class="rui-4K4Y7"
                                d="M744.727 450.484v-54.846h-54.846l-216.669 216.669-100.305-100.305h-54.846v54.846l127.728 127.728h54.846l244.092-244.092zM512 162.911c-192.485 0-349.091 156.606-349.091 349.091s156.606 349.091 349.091 349.091c192.485 0 349.091-156.606 349.091-349.091s-156.606-349.091-349.091-349.091v0zM512 938.669c-235.268 0-426.667-191.399-426.667-426.667s191.399-426.667 426.667-426.667c235.268 0 426.667 191.399 426.667 426.667s-191.399 426.667-426.667 426.667v0z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="_2Q0Jg">
                      <div data-aut-id="memberSince">
                        <div class="rui-u2K6U rui-2p-vC rui-38RAu rui-1O2Hi">
                          {userDetails && (
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
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="_102Zl _16HFI">
                      <button
                        type="button"
                        data-aut-id="shareProfile"
                        class="rui-39-wj rui-3-PNI rui-2K0j9 _291nL"
                      >
                        <span>
                          <span>Share profile link</span>
                        </span>
                      </button>
                    </div>
                    <input
                      value="https://www.olx.in/profile/450968717"
                      style={{
                        opacity: "0",
                        position: "absolute",
                        zIndex: "-10000",
                      }}
                    />
                  </div>
                </div>
                {Dp && (
                  <div className="rui-3edbr Bv1yc">
                    <div className="SJzZq" id="SJzZq">
                      <h1
                        className="o_CSw"
                        id="o_CSw"
                        style={{ textTransform: "uppercase" }}
                      >
                        Your ad was successfully posted!
                      </h1>
                      <figure
                        class="rui-1gV1x"
                        style={{
                          width: "184px",
                          height: "184px",
                          margin: "20px",
                          backgroundImage: `url(${URL.createObjectURL(Dp)})`,
                        }}
                      ></figure>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "50%",
                        }}
                      >
                        <button
                          type="button"
                          className="rui-39-wj rui-3mpqt rui-1JPTg _3bFmz"
                          onClick={handleSubmit}
                        >
                          select
                        </button>
                        <button
                          type="button"
                          className="rui-39-wj rui-3mpqt rui-1JPTg _3bFmz"
                          onClick={() => {
                            setDp(null);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <div class="rui-2NPn- rui-2HKTt" style={{ marginTop: "10px" }}>
                  <div class="_1kckR" data-aut-id="userData">
                    <div class="_2MPdS" data-aut-id="title">
                      <div class="rui-u2K6U rui-6BzOY rui-xL1fl rui-293In">
                        <span>Edit profile</span>
                      </div>
                    </div>
                    <div class="_2w1mZ">
                      <div class="_3kyOc">Basic information</div>
                      <div class="_1PFlw">
                        <div class="rui-3gsfa rui-21NjD rui-1fOtL rui-WqATt">
                          <div class="rui-2NPn- rui-1MkV7">
                            <div class="_1Pl_U">
                              <div class="rui-3OXDo">
                                <label for="name"></label>
                                <div class="rui-2zp0U rui-2rouh">
                                  <div class="rui-z4oOZ">
                                    <div class="rui-3APY9">
                                      {userDetails && (
                                        <input
                                          type="text"
                                          id="name"
                                          name="name"
                                          value={userDetails.username}
                                          autocomplete="off"
                                          placeholder="Name"
                                          class="rui-3vs1L rui-2LyaK"
                                          maxlength="30"
                                        />
                                      )}
                                      <div class="rui-1pgaV"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="rui-1rV1O">
                                  <span
                                    class="rui-3FLBC rui-_74YY"
                                    data-aut-id=""
                                  ></span>
                                  <span class="rui-YekSh rui-_74YY">
                                    8 / 30
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="_1Pl_U">
                              <div class="rui-3OXDo">
                                <label for=""></label>
                                <div class="rui-2zp0U rui-2rouh">
                                  <textarea
                                    autocomplete="off"
                                    data-aut-id="inputAbout"
                                    id=""
                                    class="rui-3vs1L rui-3xzXH"
                                    maxlength="200"
                                    name="about"
                                    placeholder="About me (optional)"
                                    style={{
                                      height: "78px",
                                      paddingTop: "10px",
                                    }}
                                  ></textarea>
                                  <div class="rui-Oihrd"></div>
                                </div>
                                <div class="rui-1rV1O">
                                  <span
                                    class="rui-3FLBC rui-_74YY"
                                    data-aut-id=""
                                  ></span>
                                  <span class="rui-YekSh rui-_74YY">
                                    0 / 200
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="rui-2NPn- rui-2myeQ">
                            <div class="_38UNB">
                              <div class="_19KyJ" data-aut-id="tip">
                                <div class="_1aGrQ">
                                  <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 1024 1024"
                                    data-aut-id="icon"
                                    class=""
                                    fill-rule="evenodd"
                                  >
                                    <path
                                      class="rui-4K4Y7"
                                      d="M318.061 279.272h-54.847l-61.517-61.517v-54.847h54.847l61.517 61.517v54.847zM512 240.485l-38.789-38.789v-77.575l38.789-38.789 38.789 38.789v77.575l-38.789 38.789zM938.667 473.211l-38.789 38.789h-77.575l-38.789-38.789 38.789-38.789h77.575l38.789 38.789zM201.697 434.425l38.789 38.789-38.789 38.789h-77.575l-38.789-38.789 38.789-38.789h77.575zM822.303 217.755l-61.517 61.517h-54.847v-54.847l61.517-61.517h54.847v54.847zM621.73 621.73c-13.848 13.809-29.867 24.747-47.67 32.505l-23.272 35.569v54.924h-77.575v-54.924l-23.272-35.53c-17.804-7.757-33.823-18.734-47.67-32.582-60.47-60.47-60.47-158.913 0-219.385 60.51-60.51 158.952-60.51 219.462 0 60.47 60.47 60.47 158.913 0 219.385zM473.211 861.091h77.575v-38.789h-77.575v38.789zM512 279.272c-62.177 0-120.63 24.204-164.538 68.19-90.764 90.725-90.764 238.351 0 329.115 14.507 14.469 30.643 26.919 48.174 37.043v186.259l38.789 38.789h155.151l38.789-38.789v-186.259c17.57-10.163 33.669-22.574 48.174-37.081 90.764-90.725 90.764-238.391 0-329.115-43.909-43.909-102.323-68.15-164.538-68.15z"
                                    ></path>
                                  </svg>
                                  <span class="_21qHn">
                                    <h4 class="rui-u2K6U rui-6BzOY rui-2Mm6c rui-293In">
                                      Why is it important?
                                    </h4>
                                  </span>
                                </div>
                                <p class="_1DQVw" data-aut-id="text">
                                  OLX is built on trust. Help other people get
                                  to know you. Tell them about the things you
                                  like. Share your favorite brands, books,
                                  movies, shows, music, food. And you will see
                                  the results…
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_2w1mZ">
                      <div class="">
                        <div class="txWap">
                          <div class="rui-u2K6U rui-6BzOY rui-VcF_8 rui-1O2Hi">
                            <span>Contact information</span>
                          </div>
                        </div>
                        <div class="yvvJ0">
                          <div class="rui-3gsfa rui-21NjD rui-1fOtL rui-WqATt">
                            <div class="rui-2NPn- rui-1MkV7">
                              <div class="_17JRt">
                                <div class="rui-3OXDo">
                                  <label for="phone"></label>
                                  <div class="rui-2zp0U rui-2rouh">
                                    <div class="rui-z4oOZ rui-3i1AN">
                                      <div class="rui-3zt7h rui-iU02L rui-WrCgP">
                                        +91
                                      </div>
                                      <div class="rui-3APY9">
                                        {userDetails && (
                                          <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            value={userDetails.phoneNumber}
                                            autocomplete="mobile"
                                            class="rui-3vs1L rui-2LyaK"
                                          />
                                        )}
                                        <div class="rui-1pgaV rui-Vcp5d">
                                          <div
                                            class="rui-24zaD"
                                            tabindex="0"
                                            role="button"
                                          >
                                            <svg
                                              width="16px"
                                              height="16px"
                                              viewBox="0 0 1024 1024"
                                              data-aut-id="icon"
                                              class=""
                                              fill-rule="evenodd"
                                            >
                                              <path
                                                class="rui-1ftqL"
                                                d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                                              ></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="rui-1rV1O">
                                    <span
                                      class="rui-3FLBC rui-_74YY"
                                      data-aut-id=""
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="rui-2NPn- rui-1MkV7">
                              <div class="rrioi">
                                <div class="rui-u2K6U rui-2p-vC rui-38RAu rui-1Eu0K">
                                  <div data-aut-id="profile_tip_phone_verified">
                                    <span>Yay! Your number is verified.</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="rui-2NPn- rui-1MkV7">
                              <div class="_17JRt">
                                <div class="rui-3OXDo">
                                  <label for=""></label>
                                  <div class="rui-2zp0U rui-2rouh">
                                    <div class="rui-z4oOZ rui-3i1AN">
                                      <div class="rui-3APY9">
                                        <input
                                          type="text"
                                          id=""
                                          name="email"
                                          value={user.email}
                                          autocomplete="email"
                                          placeholder="Email"
                                          class="rui-3vs1L rui-2LyaK"
                                        />
                                        <div class="rui-1pgaV rui-Vcp5d">
                                          <div
                                            class="rui-24zaD"
                                            tabindex="0"
                                            role="button"
                                          >
                                            <svg
                                              width="16px"
                                              height="16px"
                                              viewBox="0 0 1024 1024"
                                              data-aut-id="icon"
                                              class=""
                                              fill-rule="evenodd"
                                            >
                                              <path
                                                class="rui-1ftqL"
                                                d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                                              ></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="rui-1rV1O">
                                    <span
                                      class="rui-3FLBC rui-_74YY"
                                      data-aut-id=""
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="rui-2NPn- rui-1MkV7">
                              <div class="rrioi">
                                <div class="rui-u2K6U rui-2p-vC rui-38RAu rui-1Eu0K">
                                  <span>
                                    Your email is never shared with external
                                    parties nor do we use it to spam you in any
                                    way.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_2w1mZ">
                      <div class="">
                        <div class="cjwC3">
                          <div class="rui-u2K6U rui-6BzOY rui-VcF_8 rui-1O2Hi">
                            <span>Additional information</span>
                          </div>
                        </div>
                        <div>
                          <div class="rui-3gsfa rui-21NjD rui-13Hd1 rui-WqATt">
                            <div class="rui-2NPn- rui-1MkV7">
                              <div class="_11JSv">
                                <div class="_7KN_Z">
                                  <span>Google</span>
                                </div>
                                <p class="Hh1fz">
                                  <span>
                                    Link your Google account to seamlessly use
                                    your contact list.
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div class="rui-2NPn- rui-2myeQ">
                              <div class="_3bd8o">
                                <button
                                  type="button"
                                  data-aut-id="unLinkGoogle"
                                  class="rui-39-wj rui-3evoE rui-2K0j9 rui-2NuAg"
                                >
                                  <span>Unlink</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ATkOk" data-aut-id="buttons">
                      <a
                        class="rui-39-wj rui-3-PNI rui-1JPTg"
                        rel=""
                        data-aut-id="discard"
                        href="/profile"
                      >
                        <span>Discard</span>
                      </a>
                      <button
                        type="button"
                        data-aut-id="save"
                        class="rui-39-wj rui-3mpqt rui-1JPTg"
                      >
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default EditProfile;
