import React, { useState, useContext } from "react";
import Signup from "../Signup/Signup";
import { FirebaseContext } from "../../store/Context";
import "./Login.css";
import firebase from "firebase";

function Login(props) {
  const [showSignup, setShowSignup] = useState(false);
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebaseApp } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      alert('Logged In');
      setShowSignup(false);
      props.setTrigger(false);
    }).catch(()=>{
        alert('Email or Password is not valid')
    })
  };
  return props.trigger ? (
    <div>
      <div className="rui-3edbr Bv1yc">
        <div className="SJzZq">
          <Signup show={showSignup} setShow={setShowSignup} />
          <span
            className="RjCf1"
            data-aut-id="btnClose"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              className=""
              fillRule="evenodd"
            >
              <path
                className=""
                d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"
              ></path>
            </svg>
            {props.children}
          </span>
          {login ? (
            <>
              <div className="upperPartMain">
                <div className="upperPart">
                  <div className="img">
                    <img
                      src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
                      alt=""
                    />
                  </div>
                  <h3 className="sentence">
                    <span>
                      Help us become one of the safest places to buy and sell
                    </span>
                  </h3>
                  <div className="dots">
                    <ul className="dotsUl">
                      <li className="slick-active">
                        <button>1</button>
                      </li>
                      <li className="slick-active">
                        <button>2</button>
                      </li>
                      <li className="slick-active">
                        <button>3</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="_2AWwB _1eYWE" data-aut-id="prevSlide">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fillRule="evenodd"
                  >
                    <path
                      className="rui-32D-k"
                      d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"
                    ></path>
                  </svg>
                </span>
                <span className="_2AWwB _3Ln6T" data-aut-id="nextSlide">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fillRule="evenodd"
                  >
                    <path
                      className="rui-32D-k"
                      d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                    ></path>
                  </svg>
                </span>
              </div>
              <button
                type="button"
                data-aut-id="phoneLogin"
                className="rui-39-wj rui-3evoE rui-1JPTg _3IKPU rui-2NuAg"
                onClick={() => {
                  setLogin(false);
                }}
              >
                <div className="rui-3unfU">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fillRule="evenodd"
                  >
                    <path
                      className="rui-l7uK1 rui-iPHe_"
                      d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"
                    ></path>
                  </svg>
                </div>
                <span>Continue with Email&Password</span>
              </button>
              <button
                type="button"
                data-aut-id="facebookLogin"
                className="rui-39-wj rui-3evoE rui-1JPTg _3IKPU _19Bwy rui-2NuAg"
              >
                <div className="rui-3unfU">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fillRule="evenodd"
                  >
                    <path
                      className="rui-l7uK1 rui-iPHe_"
                      d="M425.047 243.249v150.408h-173.788v108.959h173.788v436.050h148.417v-436.050h199.159v-108.959h-199.159v-127.78c0-33.942 29.648-63.971 63.691-63.971h135.585v-116.573h-178.124c-93.222 0-169.569 71.37-169.569 157.915z"
                    ></path>
                  </svg>
                </div>
                <span>Continue with Facebook</span>
              </button>
              <button
                type="button"
                data-aut-id="googleLogin"
                className="rui-39-wj rui-3evoE rui-1JPTg _3IKPU rui-2NuAg"
                onClick={() => {
                  setShowSignup(true);
                }}
              >
                <div className="rui-3unfU">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fillRule="evenodd"
                  >
                    <path
                      className="rui-l7uK1 rui-iPHe_"
                      d="M520.579 450.924c-0.101 48.468 0 96.885 0.403 145.604 82.808 2.62 165.919 1.36 248.928 2.62-36.77 180.217-286.857 238.761-419.279 120.867-136.049-103.283-129.501-329.902 11.887-425.678 98.826-77.588 239.509-58.393 338.335 8.666 39.037-35.217 75.303-73.004 110.612-112.1-82.304-64.237-183.296-110.186-290.886-105.198-224.045-7.507-430.31 185.003-434.088 404.82-14.355 179.814 106.331 356.151 276.43 419.481 169.646 64.086 386.992 20.506 495.187-128.777 71.374-94.466 86.838-215.787 78.527-329.902-138.819-1.108-277.538-0.907-416.056-0.403z"
                    ></path>
                  </svg>
                </div>
                <span>Continue with Google</span>
              </button>
              <p className="_11PsF">or</p>
              <div
                className="create"
                onClick={() => {
                  setShowSignup(true);
                }}
              >
                <span className="_3zuBL">
                  <span>Create New Account</span>
                </span>
              </div>
              <div className="_30E5g">
                <span>All your personal details are safe with us.</span>
              </div>
              <p className="_1-xhv">
                <span>If you continue, you are accepting </span>
                <a
                  href="https://help.olx.in/hc/en-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="_24rr9"
                  data-aut-id=""
                >
                  <span data-aut-id="termsAndConditions">
                    <span>OLX Terms and Conditions and Privacy Policy</span>
                  </span>
                </a>
              </p>
            </>
          ) : (
            <>
              <span
                data-aut-id="enteruser-click-back"
                class="_2uUJF"
                onClick={() => {
                  setLogin(true);
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  class=""
                  fillRule="evenodd"
                >
                  <path
                    class="rui-32D-k"
                    d="M512 124.16v54.827l-302.293 294.187 676.949 0.043 38.827 38.784-38.827 38.784h-676.907l302.251 294.229v54.869h-56.32l-370.347-360.448v-54.869l370.347-360.405h56.32z"
                  ></path>
                </svg>
              </span>
              <div className="loginWithMail">
                <form onSubmit={handleSubmit}>
                  <div className="BEs0P">
                    <div className="OOGRC">
                      <svg
                        width="60px"
                        height="60px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        className=""
                        fillRule="evenodd"
                      >
                        <path
                          className="rui-l7uK1"
                          d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="_1-x0N">
                      <span>Enter your Email and Password to SignUp</span>
                    </h3>
                    <div className="forms">
                      <div className="_2jvJo">
                        <div>
                          <div className="rui-3OXDo">
                            <label for="email_input_field"></label>
                            <div className="rui-2zp0U rui-2rouh">
                              <div className="rui-z4oOZ" style={{width:"360px"}}>
                                <div className="rui-3APY9">
                                  <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                      setEmail(e.target.value);
                                    }}
                                    className="rui-3vs1L rui-2LyaK"
                                  />
                                  <div className="rui-1pgaV"></div>
                                </div>
                              </div>
                            </div>
                            <div className="rui-1rV1O">
                              <span className="rui-3FLBC rui-_74YY"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_2jvJo">
                        <div>
                          <div className="rui-3OXDo">
                            <label for="password_input_field"></label>
                            <div className="rui-2zp0U rui-2rouh">
                              <div className="rui-z4oOZ" style={{width:"360px"}}>
                                <div className="rui-3APY9">
                                  <input
                                    type="password"
                                    placeholder="Password"
                                    // minlength="8"
                                    value={password}
                                    onChange={(e) => {
                                      setPassword(e.target.value);
                                    }}
                                    className="rui-3vs1L rui-2LyaK"
                                  />
                                  <div className="rui-1pgaV"></div>
                                </div>
                              </div>
                            </div>
                            <div className="rui-1rV1O">
                              <span className="rui-3FLBC rui-_74YY"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rui-39-wj rui-3mpqt rui-1JPTg _2_t7- rui-38Vok">
                      <span>Login</span>
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default Login;
