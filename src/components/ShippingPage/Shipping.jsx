import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../CartNavbar/CartNavbar";
import "./Shipping.css";
import Box from "@mui/material/Box";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddressAction } from "../../Redux/Actions/Actions";
import EstimatedTIme from "../EstimatedTime/EstimatedTIme";

const Shipping = () => {
  const dispatch = useDispatch();
  const [checkFields, setCheckFields] = useState(false);
  const [signupDiv, setSignupDiv] = useState({ display: "block" });
  const [addNewAddressBtnStyle, setAddNewAddressBtnStyle] = useState({
    display: "none",
  });

  const { cartData } = useSelector((state) => state.getCartDetailsReducer);
  const { userAddress } = useSelector((state) => state.getUserAddressReducer);

  var [priceOfCart, setPriceOfcart] = useState(null);

  useEffect(() => {
    if (userAddress.length !== 0) {
      setSignupDiv({ display: "none" });
      setAddNewAddressBtnStyle({ display: "block" });
    } else {
      setAddNewAddressBtnStyle({ display: "none" });
      setSignupDiv({ display: "block" });
    }

    getPriceFromCart();
  }, [cartData, userAddress]);

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
      formValue.state !== ""
    ) {
      setCheckFields(true);

      axios.post(
        "https://faballey-jsonserver-reactjs.herokuapp.com/userAddress",
        formValue
      );

      dispatch(getUserAddressAction());

      setTimeout(() => {
        navigate("/Payment");
      }, 300);
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

  const addressDeleteHandleClick = async (id) => {
    await axios.delete(
      `https://faballey-jsonserver-reactjs.herokuapp.com/userAddress/${id}`
    );
    dispatch(getUserAddressAction());
  };

  const deliveredAddressBtn = (id) => {
    let tempAddress = userAddress.filter((add) => {
      return add.id === id;
    });
    sessionStorage.setItem("deliveredAddress", JSON.stringify(tempAddress));
    navigate("/Payment");
  };

  return (
    <div>
      <ResponsiveAppBar />

      <div className="cartDetails-main-container">
        <div className="cartDetails-secondary-container">
          <div className="cartDetails-left-container">
            <h3>Where do you want us to Deliver?</h3>
            <div className="user-address">
              {userAddress &&
                userAddress.map(
                  ({
                    id,
                    name,
                    area,
                    city,
                    state,
                    country,
                    pincode,
                    mobile,
                  }) => (
                    <div
                      key={id}
                      style={{ border: "1px solid grey", padding: "16px 1em" }}
                    >
                      <div className="name-icon">
                        <p>{name}</p>
                        <DeleteRoundedIcon
                          onClick={() => addressDeleteHandleClick(id)}
                        />
                      </div>
                      <p>{area}</p>
                      <span>{city}</span>
                      <span>{state}</span>
                      <br />
                      <span>{country}</span>
                      <span>{pincode}</span>
                      <p>Mobile {mobile}</p>
                      <button
                        onClick={() => deliveredAddressBtn(id)}
                        className="address-btn"
                      >
                        Deliver to this Address
                      </button>
                    </div>
                  )
                )}
            </div>

            <div>
              <button
                onClick={() => setSignupDiv({ display: "block" })}
                style={addNewAddressBtnStyle}
                className="addNewAddress"
              >
                Add New Address
              </button>
            </div>

            <div style={signupDiv} className="shipping-div">
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
                  {/* <InputLabel htmlfor="component-helper">Name</InputLabel> */}
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

              <EstimatedTIme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
