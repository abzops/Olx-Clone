import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import OlxLogo from "../../assets/OlxLogo";
import Tick from "../../assets/Tick";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cross from "../../assets/Cross";
import { FirebaseContext, AuthContext } from "../../store/Context";
import firebase from "firebase";

const Create = () => {
  const [showCatogory, setShowCatogory] = useState(true);
  const [shoWw1, setShowW1] = useState(
    false,
    "Mention the key features of your item (e.g. brand, model, age, type)"
  );
  const [btn, setBtn] = useState(false);
  const [shoWw2, setShowW2] = useState(false);
  const [shoWw3, setShowW3] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [brandLength, setBrandLength] = useState(0);
  const [{ src }, setImg] = useState({
    src: false,
  });

  //usestate for colecting thge valus from input for uploding to database

  const firebasex = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [catogory, setCatogory] = useState("");
  const [image, setImage] = useState();

  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        alert("fuck");
        ref.getDownloadURL().then((url) => {
          console.log(url);
        });
      });
  };

  return (
    <div>
      <header className="_1PEpL _1FbYj" data-aut-id="navigationHeader">
        <div className="_35z3k">
          <span className="_3zpX0">
            <Link to={"/"}>
              <button className="rui-1rYgw rui-82PI3">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  fillRule="evenodd"
                >
                  <path
                    className="rui-4K4Y7"
                    d="M512 124.16v54.827l-302.293 294.187 676.949 0.043 38.827 38.784-38.827 38.784h-676.907l302.251 294.229v54.869h-56.32l-370.347-360.448v-54.869l370.347-360.405h56.32z"
                  ></path>
                </svg>
              </button>
            </Link>
            <OlxLogo />
          </span>
        </div>
      </header>
      <div className="_1U6Yu _2nuC5">
        <div className="rui-jAIPe PZezW">
          <div className="rui-eJl9O rui-dOH8s rui-nZ5rF rui-1gqTw rui-33FUR rui-3aCLL rui-326SL rui-23Y2M form">
            <h1 className="o_CSw"> POST YOUR AD</h1>
            <div className="qMb4_ f8zcf">
              {showCatogory ? (
                <div>
                  <h3 class="_2glsk">
                    <span>Choose a category</span>
                  </h3>
                  <div class="rui-jAIPe _3P_vY" data-aut-id="sessionWithTittle">
                    <ul
                      class="_2qVdv rui-eJl9O rui-3c9lW rui-1CDsP rui-2MigZ rui-33FUR"
                      data-aut-id="categoryLevel"
                    >
                      <li
                        class="_27cbh"
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Cars");
                        }}
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> OLX Autos (Cars) </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Properties");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M356.848 85.333l271.515 179.315v174.318h248.824l61.479 60.925v377.85l-61.479 60.925h-730.376l-61.479-60.925v-613.093l271.515-179.315zM356.848 177.586l-193.939 128.192v540.060l16.097 15.952h100.267v-192.192h155.152v192.192h116.364v-556.012l-193.939-128.192zM844.994 515.844h-216.63v345.946h216.63l16.097-15.952v-314.042l-16.097-15.952zM783.316 640v85.333h-85.333v-85.333h85.333zM352 432c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Properties </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Mobiles");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Mobiles </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Jobs");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M341.665 89.769l-82.848 72.739v66.327h-70.534l-98.517 98.906v468.388l95.92 104.215h649.246l99.298-102.676v-478.475l-107.179-90.359h-58.539v-2.275h-3.907v-65.087l-85.419-71.703h-337.522zM350.693 204.115l25.616-22.448h269.404l26.995 22.677v24.491h-322.015v-24.72zM181.668 365.697l44.756-44.963h567.065l48.844 41.17v79.17h-660.665v-75.381zM696.787 595.514v-62.538h145.545v227.542l-46.362 47.901h-569.959l-44.341-48.156v-227.29h127.763v62.538l31.132 17.116 31.132-17.116v-62.538h262.832v62.538l31.132 17.116 31.132-17.116z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Jobs </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Bikes");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Bikes </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Electronics & Appliances");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"
                          ></path>
                        </svg>
                        <span class="_3Wayp">
                          {" "}
                          Electronics &amp; Appliances{" "}
                        </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Commercial Vehicles & Spares");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M692.542 407.546v-157.118h-250.722l-118.86 114.511 28.55 42.607h341.031zM854.755 37.877l75.989 76.034v796.134l-76.034 76.077h-498.104l-23.324-28.771c14.495-27.452 22.183-58.507 22.183-89.737 0-105.946-86.18-192.127-192.082-192.127-12.869 0-25.477 1.317-37.776 3.822l-73.353 0.307v-391.104l229.725-250.634h572.776zM824.359 111.23h-510.096l-188.7 205.743v288.146c12.432-1.756 25.037-2.987 37.776-2.987 146.402 0 265.437 119.081 265.437 265.437 0 15.153-1.756 30.22-4.349 45.155h399.89l33.12-33.075v-735.386l-33.12-33.075zM765.938 578.413v64.393h-138.714v-64.393h138.671zM729.262 177.073l36.678 36.678v230.473l-36.678 36.678h-397.297l-30.484-16.251-56.574-84.335 5.007-46.868 151.671-146.093 25.477-10.279h302.158z"
                          ></path>
                        </svg>
                        <span class="_3Wayp">
                          {" "}
                          Commercial Vehicles &amp; Spares{" "}
                        </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Furniture");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Furniture </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Fashion");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Fashion </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Books, Sports & Hobbies");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M777.049 133.012l69.146 7.353 48.548 49.856 5.553 69.297-95.903 93.421-60.089-6.386-24.218 23.781c19.044 29.22 29.447 63.633 29.447 98.728 0 84.059-57.645 154.894-135.469 175.074 2.028 12.791 3.050 25.676 3.050 38.544 0 138.711-112.843 251.535-251.535 251.535-187.504 0-327.75-206.226-205.791-403.793 74.207-77.997 153.737-106.060 231.734-97.893 16.941-82.279 89.952-144.318 177.158-144.318 24.407 0 48.093 4.794 70.397 14.231v0l4.301 2.141 22.285 12.98 21.602-21.223-0.568-0.587-5.553-69.335 95.903-93.402zM568.679 364.005c-57.948 0-105.057 47.128-105.057 105.057 0 1.346 0.114 2.69 0.208 4.017v0l3.393 56.469-51.808-15.291c-16.373-4.831-33.124-7.297-49.837-7.297-138.008 0-239.388 159.952-128.478 304.214 144.261 110.91 304.214 9.551 304.214-128.497 0-19.517-3.412-39.093-10.119-58.213v0l-18.324-52.206 57.626 1.914c56.109-0.057 103.237-47.185 103.237-105.113 0-15.386-3.544-30.034-9.779-43.603v0l-115.498 113.451-44.171-6.783-8.944-47.298 114.246-112.2-2.103-1.233c-12.317-4.907-25.354-7.391-38.809-7.391zM367.141 573.986c54.271 0 98.271 44 98.271 98.271s-44 98.252-98.271 98.252c-54.271 0-98.271-43.981-98.271-98.252s44-98.271 98.271-98.271zM804.43 212.125l-44.892 43.754 0.53 6.556 10.384 10.668 6.556 0.7 44.892-43.735-0.53-6.537-10.403-10.687-6.537-0.719z"
                          ></path>
                        </svg>
                        <span class="_3Wayp">
                          {" "}
                          Books, Sports &amp; Hobbies{" "}
                        </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Pets");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M653.689 147.951l168.004 35.403 99.123 140.646-104.437 161.363-24.699 166.528-48.766 44.876v80.131l-78.051 100.6h-291.644l-78.521-105.184 0.336-75.789-50.86-37.2-53.461-171.971-99.76-163.964 98.543-139.806 162.335-35.46 301.86-0.167zM668.063 715.029h-298.247l-0.149 32.58 41.095 55.034h217.445l39.859-51.368v-36.246zM625.751 222.82l-249.539 0.13-111.211 251.167 43.32 139.375 36.472 26.684h349.054l27.675-25.451 20.378-137.43-116.152-254.479zM560.227 494.238v19.798l-55.651 50.581-54.605-48.092v-22.288h110.258zM714.622 237.285l71.616 156.89 44.277-68.377-53.050-75.262-62.838-13.248zM618.824 353.349c10.647 0 19.275 8.644 19.275 19.275 0 10.665-8.626 19.313-19.275 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM380.916 353.349c10.647 0 19.295 8.644 19.295 19.275 0 10.665-8.644 19.313-19.295 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM287.553 238.315l-53.5 12.013-53.649 76.086 39.447 64.822 67.702-152.923z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Pets </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                      <li
                        onClick={() => {
                          setShowCatogory(false);
                          setCatogory("Services");
                        }}
                        class="_27cbh"
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M845.419 795.973l-18.078 18.059h-643.422l-18.078-18.059v-37.922l18.078-18.059h643.422l18.078 18.059v37.922zM198.941 562.396l43.308-63.059v-153.289c0-46.52 37.845-84.365 84.365-84.365h356.844c46.52 0 84.365 37.845 84.365 84.365v155.441l46.249 54.576v15.597h-615.134v-9.269zM859.19 663.070h-320.595v-14.48h352.403v-120.712l-46.249-54.576v-127.248c0-88.94-72.347-161.287-161.287-161.287h-144.863v-18.924h71.095v-76.922h-216.422v76.922h68.404v18.924h-135.058c-88.94 0-161.287 72.347-161.287 161.287v129.404l-43.308 63.040v110.096h339.653v14.48h-309.596l-63.155 63.136v101.616l63.155 63.136h707.114l63.155-63.136v-101.616l-63.155-63.136z"
                          ></path>
                        </svg>
                        <span class="_3Wayp"> Services </span>
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          data-aut-id="icon"
                          class=""
                          fill-rule="evenodd"
                        >
                          <path
                            class="rui-10_kq"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="_3mGht">
                    <span>Selected category</span>
                  </h2>
                  <div className="_1ybgv">
                    <div className="rui-3hV0L">
                      <ol className="rui-10Yqz">
                        <li>
                          <a className="aaa">{catogory}</a>
                          <span className="rui-108YJ">/</span>
                        </li>
                      </ol>
                    </div>
                    <div>
                      <button
                        type="button"
                        data-aut-id=""
                        className="rui-39-wj rui-3-PNI rui-2K0j9 _3OiU0"
                        onClick={() => {
                          setShowCatogory(true);
                        }}
                      >
                        <span className="change">Change</span>
                      </button>
                    </div>
                  </div>

                  {/*================================ select catogory PART CODE ================================*/}

                  {/* hr */}
                  <div className="_2ytqd"></div>

                  <form action="">
                    {/*================================ down PART CODE ================================*/}

                    <div className="rui-eJl9O rui-33FUR details">
                      <div
                        className="_1Hyzp rui-eJl9O rui-3mdz3 rui-27muF rui-2MigZ rui-33FUR _1Zj3d"
                        data-aut-id="itemAttributes"
                      >
                        <h2>Include some details</h2>
                        <div className="oogMA"></div>
                        <div className="oogMA"></div>
                        <div className="oogMA">
                          <div className="inputWidth">
                            <label
                              htmlFor="make"
                              style={
                                shoWw3
                                  ? { color: "#00a49f", fontWeight: "700" }
                                  : null
                              }
                            >
                              Brand *
                            </label>
                            <div
                              className="rui-2zp0U rui-3V2Ft rui-2rouh"
                              style={
                                shoWw3
                                  ? { boxShadow: "inset 0 0 0 3px #00a49f" }
                                  : null
                              }
                            >
                              <input
                                id="make"
                                type="text"
                                className="rui-3vs1L rui-3kHFv"
                                minLength={1}
                                onChange={(e) => {
                                  setBrand(e.target.value);
                                  setBrandLength(e.target.value.length);
                                  if (e.target.value.length < 2) {
                                    setShowW3(false);
                                    setBtn(false);
                                  } else {
                                    setShowW3(
                                      "Mention the key features of your item (e.g. brand, model, age, type)",
                                      true
                                    );
                                    setBtn(true);
                                  }
                                }}
                              />
                            </div>
                            <div className="rui-1rV1O">
                              <span className="rui-3FLBC rui-_74YY"></span>
                              <span className="rui-YekSh rui-_74YY">
                                {brandLength}/ 70
                              </span>
                            </div>
                            <div className="rui-1pgaV">
                              {shoWw3 ? <Tick /> : null}
                            </div>
                            <div className="rui-1rV1O">
                              <span
                                className="rui-3FLBC rui-_74YY"
                                data-aut-id=""
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div className="_2HvgT">
                          <div className="inputWidth">
                            <label
                              style={
                                shoWw1
                                  ? { color: "#00a49f", fontWeight: "700" }
                                  : null
                              }
                            >
                              Ad title *
                            </label>
                            <div
                              className="rui-2zp0U rui-3V2Ft rui-2rouh"
                              style={
                                shoWw1
                                  ? { boxShadow: "inset 0 0 0 3px #00a49f" }
                                  : null
                              }
                            >
                              <div className="rui-z4oOZ">
                                <div className="rui-3APY9">
                                  <input
                                    type="text"
                                    id="make"
                                    className="rui-3vs1L rui-3kHFv"
                                    maxLength={70}
                                    minLength={10}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                      setTitleLength(e.target.value.length);
                                      if (e.target.value.length < 10) {
                                        setShowW1(false);
                                        setBtn(false);
                                      } else {
                                        setShowW1(
                                          "Mention the key features of your item (e.g. brand, model, age, type)",
                                          true
                                        );
                                        setBtn(true);
                                      }
                                    }}
                                  />
                                  <div className="rui-1pgaV">
                                    {shoWw1 ? <Tick /> : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="rui-1rV1O">
                              <span
                                className="rui-3FLBC rui-_74YY"
                                data-aut-id=""
                              >
                                {shoWw1 ? (
                                  shoWw1
                                ) : (
                                  <span>Please enter the Title Min(10)</span>
                                )}
                              </span>
                              <span className="rui-YekSh rui-_74YY">
                                {titleLength}/ 70
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inputWidth">
                          <label
                            style={
                              shoWw2
                                ? { color: "#00a49f", fontWeight: "700" }
                                : null
                            }
                          >
                            Description *
                          </label>
                          <div
                            className="rui-2zp0U rui-3V2Ft rui-2rouh"
                            style={
                              shoWw2
                                ? { boxShadow: "inset 0 0 0 3px #00a49f" }
                                : null
                            }
                          >
                            <textarea
                              autoComplete="off"
                              data-aut-id=""
                              id="description"
                              className="rui-3vs1L rui-3xzXH"
                              maxLength="4096"
                              minLength={10}
                              name="description"
                              placeholder=""
                              style={{ height: "96px" }}
                              onChange={(e) => {
                                setDescription(e.target.value);
                                setDescriptionLength(e.target.value.length);
                                if (e.target.value.length < 10) {
                                  setShowW2(false);
                                  setBtn(false);
                                } else {
                                  setShowW2(true);
                                  setBtn(true);
                                }
                              }}
                            ></textarea>
                            <div className="rui-Oihrd rui-1pgaV">
                              {shoWw2 ? <Tick /> : null}
                            </div>
                          </div>
                          <div className="rui-1rV1O">
                            <span
                              className="rui-3FLBC rui-_74YY"
                              data-aut-id=""
                            >
                              {shoWw2 ? (
                                (shoWw2,
                                (
                                  <span>
                                    Include condition, features and reason for
                                    selling
                                  </span>
                                ))
                              ) : (
                                <span>
                                  Please enter the Description Min(10)
                                </span>
                              )}
                            </span>
                            <span className="rui-YekSh rui-_74YY">
                              {descriptionLength} / 4096
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* hr */}
                    <div className="_2ytqd"></div>

                    {/*================================ price PART CODE ================================*/}

                    <div className="rui-eJl9O rui-33FUR details">
                      <div className="_1Hyzp rui-eJl9O rui-3mdz3 rui-27muF rui-2MigZ rui-33FUR">
                        <h2 className="_3So_y">
                          <span>Set a price</span>
                        </h2>
                        <div className="TwsK9">
                          <div className="inputWidth">
                            <label>
                              <span>Price*</span>
                            </label>
                            <div className="rui-2zp0U rui-2rouh">
                              <div className="rui-z4oOZ rui-3i1AN">
                                <div className="rui-3zt7h rui-iU02L rui-WrCgP">
                                  <div>
                                    <span>₹</span>
                                  </div>
                                </div>
                                <div className="rui-3APY9">
                                  <input
                                    type="number"
                                    max={"10000"}
                                    min={0}
                                    className="rui-3vs1L rui-2LyaK"
                                    onChange={(e) => {
                                      setPrice(e.target.value);
                                    }}
                                  />
                                  <div className="rui-1pgaV rui-Vcp5d"></div>
                                </div>
                              </div>
                            </div>
                            <div className="rui-1rV1O">
                              <span
                                className="rui-3FLBC rui-_74YY"
                                data-aut-id=""
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* hr */}
                    <div className="_2ytqd"></div>

                    {/*================================ Upload Photo PART CODE ================================*/}

                    <div className="rui-eJl9O rui-33FUR ">
                      <div
                        className="_1Hyzp rui-eJl9O rui-3mdz3 rui-27muF rui-2MigZ rui-33FUR"
                        data-aut-id="dragAndDrop"
                      >
                        <h2>Upload product Images</h2>
                        <div className="_2vNUv" aria-disabled="false">
                          <div className="q_7hS" data-aut-id="imagesPreview">
                            <ul className="_3IhNg"></ul>
                            {image ? (
                              <div className="previewMain">
                                <img
                                  src={
                                    image ? URL.createObjectURL(image) : null
                                  }
                                  className="preview"
                                />
                                <span
                                  className="change"
                                  onClick={() => {
                                    setImage(false);
                                  }}
                                >
                                  <Cross />
                                </span>
                              </div>
                            ) : (
                              <div className="_1SuBk _24pdo">
                                <div className="_36uzR">
                                  <div className="imgBtn">
                                    <button
                                      type="button"
                                      className="rui-1rYgw imgBtn"
                                      role="button"
                                      tabIndex="0"
                                      data-aut-id=""
                                      title=""
                                    >
                                      <label htmlFor="firstImg">
                                        <svg
                                          width="36px"
                                          height="36px"
                                          viewBox="0 0 1024 1024"
                                          data-aut-id="icon"
                                          className="camera"
                                          fillRule="evenodd"
                                        >
                                          <path
                                            className="rui-2qwuD"
                                            d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"
                                          ></path>
                                        </svg>
                                      </label>
                                    </button>
                                  </div>
                                  <input
                                    accept="image/png, image/jpeg"
                                    type="file"
                                    multiple=""
                                    id="firstImg"
                                    autoComplete="off"
                                    onChange={(e) => {
                                      setImage(e.target.files[0]);
                                    }}
                                    style={{ display: "none" }}
                                  />
                                  <div className="e22Bu">
                                    <span>Add photo</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="_1cQuv">
                          <span>This field is mandatory </span>
                        </p>
                      </div>
                    </div>

                    {/* hr */}
                    <div className="_2ytqd"></div>

                    {/*================================ select location PART CODE ================================*/}

                    <div className="rui-eJl9O rui-33FUR ">
                      <div
                        className="_1Hyzp rui-eJl9O rui-3mdz3 rui-27muF rui-2MigZ rui-33FUR"
                        data-aut-id="location"
                      >
                        <h2>Confirm your location</h2>
                        <div
                          className=""
                          data-aut-id="sphereLocationTabContainer"
                        >
                          <ul
                            className="rui-3h0wR"
                            style={{ boxShadow: "none", display: " flex" }}
                          >
                            <li className="rui-2X9U2">
                              <div
                                data-aut-id="sphereTabManual"
                                tabIndex="0"
                                className="rui-3v6co rui-3ElDG"
                                role="button"
                              >
                                <span>List</span>
                              </div>
                            </li>
                            <li className="rui-2X9U2">
                              <div
                                data-aut-id="sphereTabCurrent"
                                tabIndex="0"
                                className="rui-3v6co"
                                role="button"
                              >
                                <span>Current location</span>
                              </div>
                            </li>
                          </ul>
                          <div
                            className="rui-26-1l _151ij details"
                            data-aut-id="sphereTabContentLocationSelector"
                          >
                            <div className="_161Kt">
                              <div className="_2ddwI">
                                <div className="inputWidth rui-2VtaD">
                                  <label htmlFor="State">State *</label>
                                  <div className="rui-2zp0U rui-3V2Ft rui-2rouh">
                                    <input
                                      type="text"
                                      className="rui-3vs1L rui-3kHFv"
                                      minLength={2}
                                      onChange={(e) => {
                                        setState(e.target.value);
                                      }}
                                    />
                                    <div className="rui-2-LBp">
                                      {/* <Tick/> */}
                                    </div>
                                  </div>
                                  <div className="rui-1rV1O">
                                    <span
                                      className="rui-3FLBC rui-_74YY"
                                      data-aut-id=""
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div className="_2ddwI">
                                <div className="inputWidth rui-2VtaD">
                                  <label htmlFor="City">City *</label>
                                  <div className="rui-2zp0U rui-3V2Ft rui-2rouh">
                                    <input
                                      type="text"
                                      className="rui-3vs1L rui-3kHFv"
                                      minLength={2}
                                      onChange={(e) => {
                                        setCity(e.target.value);
                                      }}
                                    />
                                    <div className="rui-2-LBp"></div>
                                  </div>
                                  <div className="rui-1rV1O">
                                    <span
                                      className="rui-3FLBC rui-_74YY"
                                      data-aut-id=""
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div className="_2ddwI">
                                <div className="inputWidth rui-2VtaD">
                                  <label htmlFor="Locality">
                                    Neighbourhood *
                                  </label>
                                  <div className="rui-2zp0U rui-3V2Ft rui-2rouh">
                                    <input
                                      type="text"
                                      className="rui-3vs1L rui-3kHFv"
                                      minLength={2}
                                      onChange={(e) => {
                                        setNeighbourhood(e.target.value);
                                      }}
                                    />
                                    <div className="rui-2-LBp">
                                      {/* <Tick/> */}
                                    </div>
                                  </div>
                                  <div className="rui-1rV1O">
                                    <span
                                      className="rui-3FLBC rui-_74YY"
                                      data-aut-id=""
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* hr */}
                    <div className="_2ytqd"></div>

                    {/*================================ Post Button PART CODE ================================*/}

                    <div className="rui-eJl9O rui-33FUR">
                      <div className="_1Hyzp">
                        <label htmlFor="btnPost">
                          <button
                            type="button"
                            id="btnPost"
                            onClick={handleSubmit}
                            className={
                              btn
                                ? "rui-39-wj  rui-3mpqt rui-1JPTg _3bFmz"
                                : "rui-39-wj rui-3mpqt2  rui-1JPTg _3bFmz"
                            }
                          >
                            post Now
                          </button>
                        </label>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Create;
