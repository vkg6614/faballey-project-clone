import * as React from "react";
import "./CartNavbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { NavLink } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];
const pages = [
  { id: 1, icon: <AddShoppingCartIcon />, text: "Bag" },
  { id: 2, icon: <LocalShippingIcon />, text: "Shipping" },
  { id: 3, icon: <PaymentIcon />, text: "Payment" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ padding: "0", border: "1px solid black" }}>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "grey",
          padding: "0px",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0",
          }}
        >
          <img
            style={{ width: "10%" }}
            src="https://www.faballey.com/images/logo.png"
            alt="faballey-img1"
          />

          <Box className="details-div">
            {pages.map((page) => (
              <NavLink
                className="detail-btn"
                to={`/${page.text}`}
                key={page.id}
                style={({ isActive }) => ({
                  color: isActive ? "pink" : "black",
                  borderBottom: isActive ? "2px solid pink" : "black",
                })}
              >
                {page.icon}
                <p>{page.text}</p>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
