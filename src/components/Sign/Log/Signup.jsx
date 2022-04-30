import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main-signup-div">
      <p>
        <span>X</span>
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
          <p>Skip</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
