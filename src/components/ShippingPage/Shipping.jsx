import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./Shipping.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Shipping = () => {
  const [checkFields, setCheckFields] = useState(false);

  const { cartData } = useSelector((state) => state.getCartDetailsReducer);
  // console.log(cartData, "car");
  var [priceOfCart, setPriceOfcart] = useState(null);

  const [formValue, setFormValue] = React.useState({
    name: "",
    mobile: "",
    area: "",
    country: "",
    pincode: "",
    city: "",
    state: "",
    checked: "",
  });
  const navigate = useNavigate();

  const onChangeFormHanle = (e) => {
    let checkedValue = e.target.checked;
    let value = e.target.value;
    let name = e.target.name;
    setFormValue({ ...formValue, [name]: value, checked: checkedValue });
  };
  // console.log(formValue);

  const shippingBtnOnClickHandle = () => {
    if (
      formValue.name !== "" &&
      formValue.mobile !== "" &&
      formValue.area !== "" &&
      formValue.country !== "" &&
      formValue.pincode !== "" &&
      formValue.city !== "" &&
      formValue.state !== "" &&
      formValue.checked !== false
    ) {
      setCheckFields(true);

      axios.post(
        "https://faballey-jsonserver-reactjs.herokuapp.com/userAddress",
        formValue
      );

      navigate("/Payment");
    } else {
      setCheckFields(false);
      alert("one of field is missing");
    }
  };

  const getPriceFromCart = () => {
    let price = cartData.map((data) => {
      return data.price;
    });
    let sum = price.reduce((acc, curr) => (acc += curr), 0);
    setPriceOfcart(sum);
  };

  useEffect(() => {
    getPriceFromCart();
  }, []);

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
                  <Input
                    type="text"
                    name="name"
                    value={formValue.name}
                    onChange={(e) => onChangeFormHanle(e)}
                  />
                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>Mobile number*</label>
                  <Input
                    type="phone"
                    name="mobile"
                    value={formValue.mobile}
                    onChange={(e) => onChangeFormHanle(e)}
                  />

                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>

                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-simple">Name</InputLabel> */}
                  <label>Country*</label>
                  <Input
                    type="text"
                    name="country"
                    value={formValue.country}
                    onChange={(e) => onChangeFormHanle(e)}
                  />
                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>PinCode*</label>
                  <Input
                    type="number"
                    name="pincode"
                    onChange={(e) => onChangeFormHanle(e)}
                    value={formValue.pincode}
                  />

                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
              </Box>
              <label name="address">Address*</label>
              <textarea
                name="area"
                onChange={(e) => onChangeFormHanle(e)}
                value={formValue.area}
                style={{
                  width: "98%",
                  height: "100px",
                  margin: "10px 0",
                }}
              />
              <Box className="box">
                <FormControl className="formControl" variant="standard">
                  <label>City*</label>
                  <Input
                    type="text"
                    name="city"
                    value={formValue.city}
                    onChange={(e) => onChangeFormHanle(e)}
                  />
                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
                <FormControl className="formControl" variant="standard">
                  {/* <InputLabel htmlFor="component-helper">Name</InputLabel> */}
                  <label>State*</label>
                  <Input
                    type="text"
                    name="state"
                    value={formValue.state}
                    onChange={(e) => onChangeFormHanle(e)}
                  />

                  <FormHelperText
                    style={{ color: checkFields ? "white" : "red" }}
                    id="component-helper-text"
                  >
                    This field is required
                  </FormHelperText>
                </FormControl>
              </Box>
              <br />
              <input
                type="checkbox"
                id="checkAdd"
                name="checked"
                value={formValue.checked}
                onChange={(e) => onChangeFormHanle(e)}
              />
              <label htmfor="checkAdd">Make this my default address</label>
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
                  <p>Rs {priceOfCart}</p>
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>Rs {priceOfCart}</p>
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
