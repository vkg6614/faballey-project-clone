import React, { useEffect, useState } from "react";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const { cartData } = useSelector((state) => state.getCartDetailsReducer);
  const [cartLength, setCartLength] = useState("");
  useEffect(() => {
    setCartLength(cartData);
  }, [cartLength, cartData]);
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
            <Grid item>
              <Button>Login</Button>
            </Grid>
            <Grid item>
              <Button className="signup">Sign up</Button>
            </Grid>
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
