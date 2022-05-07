import React, { useEffect } from "react";
import "./Signup.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import { getUserLoginAction } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup_state }) => {
  // console.log(signup_state, "sign_staee");
  const [signupState, setSignupState] = useState(false);

  const [mainLoginStyle, setMainLoginStyle] = useState({ display: "none" });
  // console.log(mainLoginStyle, "main");
  useEffect(() => {
    setSignupState(signup_state ? true : false);
    setMainLoginStyle(signupState ? { display: "block" } : { display: "none" });
  }, [signup_state, signupState]);

  const [myStyle, setMyStyle] = useState({ display: "none" });
  const [verifyPassword, setVerifyPassword] = useState({ display: "none" });

  const userMail = useRef(null);
  const userPassword = useRef(null);
  const userPasswordVerify = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.getUserLoginReducer);

  const onSubmitOfUserMail = (e) => {
    e.preventDefault();
    let checkUserRegisteredorNot = userLogin.filter((user) => {
      return user.email === userMail.current.value;
    });
    postUserData(checkUserRegisteredorNot);
  };

  const postUserData = (data) => {
    if (data.length === 0) {
      setTimeout(() => {
        setMainLoginStyle({ display: "none" });
      }, 50);

      setTimeout(() => {
        setMyStyle({ display: "block" });
      }, 100);
    } else {
      setVerifyPassword({ display: "block" });
      setMainLoginStyle({ display: "none" });
    }
  };

  const changeEmailHandleClick = () => {
    setMyStyle({ display: "none" });
    setMainLoginStyle({ display: "block" });
  };

  const handleSignUpBtnClick = () => {
    console.log(userPassword.current.value);

    let checkUserRegisteredorNot = userLogin.filter((user) => {
      return user.email === userMail.current.value;
    });

    if (checkUserRegisteredorNot.length === 0) {
      axios.post(
        "https://faballey-jsonserver-reactjs.herokuapp.com/userLogin",
        {
          email: userMail.current.value,
          password: userPassword.current.value,
        }
      );
      setTimeout(() => {
        dispatch(getUserLoginAction());
      }, 800);
      setMyStyle({ display: "none" });
      alert("signup process done");
      navigate("/");
    }
  };

  const handleSignInBtnClick = () => {
    let checkUserVerifyOrNot = userLogin.filter((user) => {
      return user.password === userPasswordVerify.current.value;
    });
    if (checkUserVerifyOrNot.length > 0) {
      setVerifyPassword({ display: "none" });
      alert("login Process done");
      navigate("/");
    }
  };

  return (
    <div>
      <div style={mainLoginStyle} className="main-signup-div">
        <p>
          <span
            onClick={() => {
              setMainLoginStyle({ display: "none" });
            }}
          >
            X
          </span>
        </p>
        <div className="signup-div">
          <h2 style={{ marginBottom: "30px" }}>LOGIN OR SIGNUP</h2>
          <p>* for a quicker checkout</p>
          <form action="" onSubmit={onSubmitOfUserMail}>
            <input
              type="text"
              placeholder="Enter Mobile/Email"
              ref={userMail}
            />
            <br />
            <input className="signupBtns" type="submit" value="CONTINUE" />
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
            <p onClick={() => setMainLoginStyle({ display: "none" })}>Skip</p>
          </div>
        </div>
      </div>
      <div style={myStyle} className="create-new-password">
        <h3 style={{ marginBottom: "20px" }}>Set Password</h3>
        <p
          onClick={() => {
            changeEmailHandleClick();
          }}
          style={{
            textAlign: "right",
            marginBottom: "10px",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          change Email
        </p>
        <input
          ref={userPassword}
          type="password"
          placeholder="create new password"
        />
        <br />
        <br />
        <button onClick={() => handleSignUpBtnClick()} className="signupBtns">
          Submit
        </button>
      </div>
      <div style={verifyPassword} className="verify-password">
        <h3 style={{ marginBottom: "20px" }}>Login</h3>
        <input
          ref={userPasswordVerify}
          type="password"
          placeholder="enter your  password"
        />
        <br />
        <br />
        <button onClick={() => handleSignInBtnClick()} className="signupBtns">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;
