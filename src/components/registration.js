import React, { useState } from "react";
import Table from "./Table";

function Registration(props) {
  const [userDetails, setuserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    date: "",
  });

  const [isFnameValid, setisFnameValid] = useState("true");
  const [fnameError, setfnameError] = useState("");

  const [isLnameValid, setisLnameValid] = useState("true");
  const [lnameError, setlnameError] = useState("");

  const [isEmailValid, setisEmailValid] = useState(true);
  const [emailError, setemailError] = useState("");

  const [isPasswordValid, setisPasswordValid] = useState(true);
  const [passwordError, setpasswordError] = useState("");

  const [isCPasswordValid, setisCPasswordValid] = useState(true);
  const [cpasswordError, setcpasswordError] = useState("");

  const [isDateValid, setisDateValid] = useState(true);
  const [dateError, setdateError] = useState("");

  const [validdata, setvaliddata] = useState(false);

  const Registration = (event) => {
    event.preventDefault();
    console.log(userDetails);

    validateFirstName(userDetails.fname);
    validateLastName(userDetails.lname);
    validateEmail(userDetails.email);
    validatePassword(userDetails.password);
    validateConfirmPassword(userDetails.cpassword);
    validateDate(userDetails.date);
    // const isGenderValid = validateGender(userDetails.gender)
    if (
      isFnameValid &&
      isLnameValid &&
      isEmailValid &&
      isPasswordValid &&
      isDateValid
    ) {
      setvaliddata(true);
    }
  };

  //* Firstname
  const expr = /^[a-zA-Z_]{3,15}$/;

  const validateFirstName = (fname) => {
    if (fname && expr.test(fname)) {
      setisFnameValid(true);
      setfnameError("");
      return true;
    } else {
      setisFnameValid(false);
      setfnameError("Please enter your first name.");
      return false;
    }
  };

  //* LastName

  const validateLastName = (lname) => {
    if (lname && expr.test(lname)) {
      setisLnameValid(true);
      setlnameError("");
      return true;
    } else {
      setisLnameValid(false);
      setlnameError("Please enter your last name.");
      return false;
    }
  };

  //* email

  const mailexp =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;

  const validateEmail = (email) => {
    if (mailexp.test(email)) {
      setisEmailValid(true);
      setemailError("");
      return true;
    } else {
      setisEmailValid(false);
      setemailError("Please enter an email address.");
      return false;
    }
  };

  //* password
  const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const validatePassword = (password) => {
    if (passwordExp.test(password)) {
      setisPasswordValid(true);
      setpasswordError("");
      return true;
    } else {
      setisPasswordValid(false);
      setpasswordError("Please enter a password.");
      return false;
    }
  };

  //* cpassword

  const validateConfirmPassword = (cpassword, password) => {
    if (cpassword === userDetails.password && cpassword != "") {
      setisCPasswordValid(true);
      setcpasswordError("");
      return true;
    } else {
      setisCPasswordValid(false);
      setcpasswordError("Please enter a password.");
      return false;
    }
  };

  //* date

  const validateDate = (date) => {
    if (date) {
      setisDateValid(true);
      setdateError("");
      return true;
    } else {
      setisDateValid(false);
      setdateError("please select one option");
      return false;
    }
  };

  //gender

  //handleChange

  const handleChange = (event) => {
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };
    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };

  return (
    <div className=" mb-3">
      <div className="col-7 login-form-style  registration-form-container-1">
        <h1>Registration</h1>

        <form onSubmit={Registration}>
          <div className="form-row">
            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="text"
                placeholder="Firstname"
                name="fname"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.fname}
              />{" "}
              <br></br>
              {!isFnameValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {fnameError}
                </span>
              ) : null}
            </div>
            <br />
            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="text"
                placeholder="Lastname"
                name="lname"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.lname}
              />
              <br></br>
              {!isLnameValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {lnameError}
                </span>
              ) : null}
            </div>
            <br />

            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="password"
                placeholder="New Password"
                name="password"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.password}
                autoComplete="off"
              />
              {!isPasswordValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {passwordError}
                </span>
              ) : null}
            </div>
            <br />

            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.cpassword}
                autoComplete="off"
              />
              {!isCPasswordValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {cpasswordError}
                </span>
              ) : null}
            </div>
            <br />

            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="email"
                placeholder="Example@gmail.com"
                name="email"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.email}
              />
              <br></br>
              {!isEmailValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {emailError}
                </span>
              ) : null}
            </div>
            <br />

            <div>
              <input
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                type="date"
                placeholder="Enter date"
                name="date"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={userDetails.date}
              />
              <br></br>
              {!isDateValid ? (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {dateError}
                </span>
              ) : null}
            </div>
            <br />
          </div>

          <div>
            <input type="submit" className="form-submit" />
          </div>
        </form>
      </div>

      <div className="table table-bordered border-primary">
        {validdata && <Table user={userDetails} />}
      </div>
    </div>
  );
}

export default Registration;
