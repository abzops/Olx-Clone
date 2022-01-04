import React, { useContext, useState } from "react";

import "./Signup.css";
import "firebase/firestore";
import { FirebaseContext } from "../../store/Context";
import firebase from "firebase";

export default function Signup(props) {
  const [goLogin, setGoLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { firebaseApp } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({ displayName: username })
          .then(console.log("user authentication completed"))

          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .add({
                id: result.user.uid,
                username: username,
                phone: phoneNumber,
              })
              .then(() => {
                console.log("users other data's added");
                setGoLogin(false);
              });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return props.show ? (
    <div>
      <div className="rui-3edbr Bv1yc">
        <div className="SJzZq">
          <span
            className="RjCf1"
            onClick={() => {
              props.setShow(false);
            }}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
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
          {goLogin ? (
            <>
              <span
                data-aut-id="enteruser-click-back"
                class="_2uUJF"
                onClick={() => {
                  props.setShow(false);
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  class=""
                  fill-rule="evenodd"
                >
                  <path
                    class="rui-32D-k"
                    d="M512 124.16v54.827l-302.293 294.187 676.949 0.043 38.827 38.784-38.827 38.784h-676.907l302.251 294.229v54.869h-56.32l-370.347-360.448v-54.869l370.347-360.405h56.32z"
                  ></path>
                </svg>
              </span>
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
                    <span>Enter your details to Singup</span>
                  </h3>
                  <div className="forms">
                    <div className="_2jvJo">
                      <div>
                        <div className="rui-3OXDo">
                          <div className="rui-2zp0U rui-2rouh">
                            <div className="rui-z4oOZ">
                              <div className="rui-3APY9">
                                <input
                                  type="text"
                                  placeholder="Username"
                                  value={username}
                                  onChange={(e) => {
                                    setUsername(e.target.value);
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
                          <label for="email_input_field"></label>
                          <div className="rui-2zp0U rui-2rouh">
                            <div className="rui-z4oOZ">
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
                          <label for="email_input_field"></label>
                          <div className="rui-2zp0U rui-2rouh">
                            <div className="rui-z4oOZ">
                              <div className="rui-3zt7h rui-iU02L rui-WrCgP">
                                +91
                              </div>
                              <div className="rui-3APY9">
                                <input
                                  // type="tel"
                                  // pattern="[0-9]{10}"
                                  placeholder="Phone Number"
                                  value={phoneNumber}
                                  onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                  }}
                                  className="rui-3vs1L rui-2LyaK"
                                  style={{ width: "166px" }}
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
                            <div className="rui-z4oOZ">
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
                    <span>Sign Up</span>
                  </button>
                  <p className="_1-xhv">
                    <span>
                      Your email is never shared with external parties nor do we
                      use it to spam you in any way.
                    </span>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="message">
              <h3>
                <span className="message-title">Thank you!</span> <br />
                <div className="message-description">
                  Thanks for signing up. <br /> Please Login an explore...
                </div>
                <button
                  className="rui-39-wj rui-3mpqt rui-1JPTg _2_t7- rui-38Vok "
                  onClick={() => {
                    props.setShow(false);
                  }}
                >
                  <span>Login Now</span>
                </button>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
