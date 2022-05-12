import React, { useEffect, useState } from "react";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const getEmailFromLocatStorage = () => {
  const data = localStorage.getItem("userEmail");
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

const Navbar = ({ getSignupStateFromSignup }) => {
  const { cartData } = useSelector((state) => state.getCartDetailsReducer);

  // useEffect(() => {
  //   getEmailFromLocatStorage();
  // }, [emailFirstLetter]);

  // const { userLogin } = useSelector((state) => state.getUserLoginReducer);
  // const navigate = useNavigate();

  const [cartLength, setCartLength] = useState("");
  const [handleSignup, setHandleSignup] = useState(false);

  // const [signupStyle, setSignupStyle] = useState({ display: "block" });

  useEffect(() => {
    setCartLength(cartData);
    getSignupStateFromSignup(handleSignup);
  }, [cartLength, cartData, getSignupStateFromSignup, handleSignup]);

  const [emailFirstLetter, setEmailFirstLetter] = useState(
    getEmailFromLocatStorage()
  );

  console.log(emailFirstLetter, "eamila");

  console.log(emailFirstLetter, "em");

  // const [loginHandleStyle, setLoginHandleStyle] = useState({ display: "none" });

  // console.log(emailFirstLetter);

  const location = useLocation();
  if (
    location.pathname === "/cartDetails" ||
    location.pathname === "/Bag" ||
    location.pathname === "/Shipping" ||
    location.pathname === "/Payment"
  ) {
    return null;
  }

  return (
    <div>
      <div className="container">
        <p className="left-navbar">
          <span>SALE|UPTO 60% Off,</span> Shop Now
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </p>
        <div className="img-div">
          <img
            width="60%"
            height="32px"
            style={{ backgroundColor: "black" }}
            src="https://static.faballey.com/images/indya/fabwht.png?v=11.9"
            alt="faballey-icon"
          />
          <img
            width="80%"
            height="32px"
            style={{ padding: "0.3em 1.5em" }}
            src="https://static.faballey.com/images/indya/indblk.png?v=11.9"
            alt="indya-icon"
          />
        </div>
        <div>
          <Grid container>
            <Grid item>
              <Button>Track Order</Button>
            </Grid>
            <Grid item>
              <Button>Gift Cards</Button>
            </Grid>

            {emailFirstLetter === null ? (
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Button onClick={() => setHandleSignup(!handleSignup)}>
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => setHandleSignup(!handleSignup)}
                      className="signup"
                    >
                      Sign up
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <p className="emailFirst">
                  {emailFirstLetter && emailFirstLetter.email[0].toUpperCase()}
                </p>
              </Grid>
            )}

            <Grid item>
              <NavLink to="/Bag">
                <IconButton className="AddToCartBtn" aria-label="cart">
                  <StyledBadge
                    badgeContent={cartLength.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="categoryLists">
        <img
          height="30px"
          src="https://static.faballey.com/images/logo.png?v=11.9"
          alt="fabally-icons"
        />
        <div className="lists">
          <p>NEW IN</p>
          <p>SUMMER'22</p>
          <p>CLOTHING</p>
          <p>TOPS</p>
          <p>DRESSES</p>
          <p>LOUNGEWEAR</p>
          <p>CURVE</p>
          <p>TRENDS</p>
          <p>LOOKBOOKS</p>
          <p>SALE</p>
          <p>2DRESSESAT₹1800</p>
          <p>2TOPSAT₹999</p>
        </div>
        <div className="search-currency">
          <span className="material-symbols-outlined">search</span>
          <select>
            <option>₹ INR</option>
            <option>$ USD</option>
            <option>$ CAD</option>
            <option>£ GBP</option>
            <option>$ AUD</option>
            <option>$ SGD</option>
            <option>€ EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
