import React, { useContext } from "react";
import "./UserNav.css";
import { AuthContext, FirebaseContext } from "../../store/Context";
import firebase from "firebase";

function UserNav() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="_2dtTPe">
      <div className="_3Wfs8e _2Jv6ie">
        <ul>
          <li
            onClick={() => {
              firebase
                .auth()
                .signOut();
            }}
          >
            <span>Logout</span>
          </li>
          <li>
            <span>{user.email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserNav;
