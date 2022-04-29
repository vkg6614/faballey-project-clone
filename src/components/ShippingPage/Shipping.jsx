import React from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./Shipping.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  //   const [name, setName] = React.useState("");
  const navigate = useNavigate();
  //   const handleChange = (event) => {
  //     setName(event.target.value);
  //   };

  const shippingBtnOnClickHandle = () => {
    // console.log("ha");
    navigate("/Payment");
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="cartDetails-main-container">
        <div className="cartDetails-secondary-container">
          <div className="cartDetails-left-container">
            <h3>Where do you want us to Deliver?</h3>
            <div className="shipping-div">
              <Box className="box">
                <FormControl className="formControl" variant="standard">
                  <label>Full name*</label>
                  <Input type="text" />
                  <FormHelperText
                    style={{ color: "red", marginBottom: "10px" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>Mobile number*</label>
                  <Input type="phone" />

                  <FormHelperText
                    style={{ color: "red", marginBottom: "10px" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>

                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-simple">Name</InputLabel> */}
                  <label>Country*</label>
                  <Input type="text" />
                  <FormHelperText
                    style={{ color: "red", marginBottom: "10px" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>PinCode*</label>
                  <Input type="number" />

                  <FormHelperText
                    style={{ color: "red", marginBottom: "10px" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
              </Box>
              <label name="address" id="address">
                Address*
              </label>
              <textarea
                for="address"
                style={{
                  width: "98%",
                  height: "100px",
                  margin: "10px 0",
                }}
              />
              <Box className="box">
                <FormControl className="formControl" variant="standard">
                  <label>City*</label>
                  <Input type="text" />
                  <FormHelperText
                    style={{ color: "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>State*</label>
                  <Input type="text" />

                  <FormHelperText
                    style={{ color: "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
              </Box>
              <br />
              <input type="checkbox" name="checkAdd" id="checkAdd" />
              <label for="checkAdd">Make this my default address</label>
              <br />

              <Button
                onClick={() => shippingBtnOnClickHandle()}
                variant="contained"
                disableElevation
              >
                Deliver to this address
              </Button>
            </div>
          </div>
          <div className="cartDetails-right-container">
            <h3>Price Details</h3>
            <div>
              <div className="top-div">
                <div style={{ display: "flex" }}>
                  <div>
                    <h5>Donation</h5>
                    <p style={{ fontSize: "0.7rem", width: "80%" }}>
                      Extra 10 (This donation is towards NGO Ssrishti that is
                      providing food and hygiene essentials to migrant labors
                      during the COVID-19 lockdown)
                    </p>
                  </div>
                  <input type="checkbox" />
                </div>

                <h3 style={{ margin: "20px 0px" }}>Price Details</h3>
                <div className="sub-total">
                  <p>Sub Total</p>
                  <p>Rs 1310</p>
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>Rs 1310</p>
                </div>
              </div>

              <div className="bottom-div">
                <p style={{ marginBottom: "18px" }}>Estimated Delivery Time</p>
                <p>India : 4-6 business days.</p>
                <p>International: 7-12 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
