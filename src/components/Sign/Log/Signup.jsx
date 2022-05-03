import React, { useEffect } from "react";
import "./Signup.css";
import { useState } from "react";

const Signup = ({ signup_state }) => {
  const [crossClick, setCrossClick] = useState(signup_state ? false : true);
  console.log(signup_state, "si", crossClick, "cro");

  // useEffect(() => {
  //   setCrossClick(signup_state ? true : false);
  // }, [signup_state]);

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
        <input type="text" placeholder="Enter Mobile/Email" />
        <br />
        <button>CONTINUE</button>
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
