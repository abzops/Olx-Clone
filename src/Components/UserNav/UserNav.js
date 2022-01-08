import React, { useContext } from "react";
import "./UserNav.css";
import { AuthContext, FirebaseContext } from "../../store/Context";
import firebase from "firebase";
import { Link } from "react-router-dom";

function UserNav() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div class="_3nqdZ">
      <div class="_3hG1N" data-aut-id="profile">
        <figure
          class="rui-1gV1x _2hlS-"
          style={{
            width: "56px",
            height: "56px",
            backgroundImage: `url(${
              user.photoURL
                ? user.photoURL
                : " https://statics.olx.in/external/base/img/avatar_1.png"
            })`,
          }}
        ></figure>
        <span class="_2c-2r" data-aut-id="loggedUser">
          <div class="_1PjtT">
            <div class="rui-u2K6U rui-2p-vC rui-2Mm6c rui-1Eu0K">
              <span>Hello</span>,
            </div>
          </div>
          <div class="_1dYHv">
            <div class="rui-u2K6U rui-6BzOY rui-xL1fl rui-293In">
              {user.displayName}
            </div>
          </div>
          <Link to="/editprofile">
            <span class="_1HK4r">
              <span>View and edit profile</span>
            </span>
          </Link>
        </span>
      </div>
      <div class="_1Up9t" data-aut-id="menu">
        <a
          class="_243cz"
          rel="nofollow"
          data-aut-id="btnProfileMyAds"
          href="/myads"
        >
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"
              ></path>
            </svg>
          </div>
          <span>My ADS</span>
        </a>
        <a
          class="_243cz"
          rel="nofollow"
          data-aut-id="btnShowBusiessPacakges"
          href="/payments/businesspackages/my_account"
        >
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z"
              ></path>
            </svg>
          </div>
          <span>Buy Business Packages</span>
        </a>
        <a
          class="_243cz"
          rel=""
          data-aut-id="btnOrdersMyOrders"
          href="/myorders/orders"
        >
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z"
              ></path>
            </svg>
          </div>
          <span>Bought Packages &amp; Billing</span>
        </a>
        <a
          href="https://help.olx.in/hc/en-us"
          target="_blank"
          rel="noopener noreferrer"
          class="_243cz aTsM5"
          data-aut-id="btnProfileHelp"
        >
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"
              ></path>
            </svg>
          </div>
          <span>Help</span>
        </a>
        <span class="_243cz _1Lsah" data-aut-id="btnProfileLanguage">
          <div class="cfoYk _1u1x6">
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
                d="M679.214 818.309l-77.189-77.189 78.312-104.494 131.801 52.751c-32 53.915-77.809 98.715-132.927 128.93zM434.425 852.091v-184.941l-38.789-38.789h-212.364c-12.955-36.461-20.364-75.52-20.364-116.364 0-14.235 1.125-28.237 2.792-42.047l53.294 35.53 38.827 2.405 124.51-62.254 58.609 87.854 49.649 13.189 232.728-116.364 16.29-53.915-110.080-192.737c134.75 48.408 231.564 177.106 231.564 328.339 0 37.197-5.973 72.999-16.795 106.667l-162.715-65.125-45.459 12.761-116.364 155.151 3.608 50.695 77.15 77.15c-28.315 7.409-57.871 11.791-88.513 11.791-26.687 0-52.557-3.297-77.575-8.999zM221.945 705.939h134.905v118.303c-54.535-27.23-101.159-67.995-134.905-118.303zM512 162.91c5.663 0 11.17 0.582 16.795 0.853l123.112 215.506-165.43 82.734-58.57-87.893-49.649-13.189-134.982 67.49-57.871-38.555c49.649-132.306 177.106-226.949 326.593-226.949zM512 85.333c-235.249 0-426.667 191.379-426.667 426.667 0 235.249 191.418 426.667 426.667 426.667 235.288 0 426.667-191.418 426.667-426.667 0-235.288-191.379-426.667-426.667-426.667z"
              ></path>
            </svg>
          </div>
          Select language / भाषा चुनें
        </span>
        <a
          class="_243cz"
          rel=""
          data-aut-id="btnSettings"
          href="/settings/privacy"
        >
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"
              ></path>
            </svg>
          </div>
          <span>Settings</span>
        </a>
        <a class="_243cz aTsM5" rel="" data-aut-id="btnOlxLogo" href="#">
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M891.008 822.315l47.659 48.853-47.701 48.085h-757.931l-47.701-48.853 47.787-48.043h757.888zM493.525 85.333l46.507 46.592 0.213 475.179 178.475-189.483 62.976 0.299-0.256 58.752 2.091 4.267-290.005 302.592-291.84-304.512 4.011-4.139 0.256-57.472 62.507 0.213 178.475 189.483 0.171-475.179 46.421-46.592z"
              ></path>
            </svg>
          </div>
          <span>Install OLX Lite app</span>
        </a>
        <span class="_243cz aTsM5" data-aut-id="btnProfileLogout">
          <div class="cfoYk">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"
              ></path>
            </svg>
          </div>
          <span
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserNav;
