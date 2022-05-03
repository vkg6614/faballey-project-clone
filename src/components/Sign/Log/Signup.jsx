import React, { useEffect } from "react";
import "./Signup.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { getUserLoginAction } from "../../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

const Signup = ({ signup_state }) => {
  const [crossClick, setCrossClick] = useState(signup_state ? false : true);
  const userMail = useRef(null);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.getUserLoginReducer);

  const onSubmitOfUserMail = (e) => {
    e.preventDefault();
    let checkUserRegisteredorNot = userLogin.map((user) => {
      if (user.email !== userMail.current.value) return userMail.current.value;
    });

    postUserData(checkUserRegisteredorNot[0]);
  };

  const postUserData = (data) => {
    if (data) {
      axios.post(
        "https://faballey-jsonserver-reactjs.herokuapp.com/userLogin",
        {
          email: data,
        }
      );
      setTimeout(() => {
        dispatch(getUserLoginAction());
      }, 1000);
    }
  };

  return (
    <div
      style={{
        display:
          (signup_state && crossClick) ||
          (signup_state === false && crossClick === false)
            ? "block"
            : "none",
      }}
      className="main-signup-div"
    >
      <p>
        <span onClick={() => setCrossClick(signup_state ? false : true)}>
          X
        </span>
      </p>
      <div className="signup-div">
        <h2 style={{ marginBottom: "30px" }}>LOGIN OR SIGNUP</h2>
        <p>* for a quicker checkout</p>
        <form action="" onSubmit={onSubmitOfUserMail}>
          <input type="text" placeholder="Enter Mobile/Email" ref={userMail} />
          <br />
          <input type="submit" value="CONTINUE" />
        </form>
        <div className="img-div">
          <p>Or continue with</p>
          <span>
            <img
              src="https://www.faballey.com/images/loginfb.png"
              alt="facebook"
            />
          </span>
          <span>
            <img
              style={{ marginLeft: "10px" }}
              src="https://www.faballey.com/images/logingogl.png"
              alt="google"
            />
          </span>
          <p onClick={() => setCrossClick(signup_state ? false : true)}>Skip</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
