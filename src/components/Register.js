import React, { useState } from "react";
import Table from "./Table";

function Register() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState(true);
  const [password, setpassword] = useState("");
  const [passwordErr, setpasswordErr] = useState(true);

  const handleChange = (e) => {
    const copy = { ...user };
    copy[e.target.name] = e.target.value;
    setuser(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mail = validateEmail(user.email);
    const pass = validatePassword(user.password);
  };
 
  const validatePassword = (password) => {
    if (password === "") {
      setpassword("");
      setpasswordErr(true);
    } else {
      setpassword(password);
      setpasswordErr(false);
      console.log(password,"pass");
    }
  };

  const validateEmail = (email) => {
    if (email==="") {
      setemail("");
      setemailErr(true);
    } else {
      console.log("else cond");
      setemail(email);

      console.log(email,"ema");
      setemailErr(false);
    }
  };

  console.log(user, "last");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {emailErr ? <span>not valid</span> : null}
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {passwordErr ? <span>not valid</span> : null}
        <input type="submit" value="click" />
      </form>
      <Table user={user} />
    </div>
  );
}

export default Register;

// import React, { useState } from "react";

// function Register() {
//   const [user, setuser] = useState({
//     name: "",
//     mail: "",
//   });

//   const [name, setname] = useState("");
//   const [mail, setmail] = useState("");

//   const valid = (e) => {
//     e.preventDefault();
//     const name = validatename(user.name);
//     const mail = validatemail(user.mail);

//   }

//   const validatename = (name) => {
//     if (name == "") {
//       setname("");
//     } else {
//       setname(user.name);
//     }
//   };
//   console.log("name",name);

//   const validatemail = (mail) => {
//     if (mail == "") {
//       setmail("");
//     } else {
//       setmail(user.mail);
//     }
//   };
//   console.log("mail",mail);
//   console.log(user)

//   const handleChange = (event) => {
//     const userCopy = { ...user };
//     userCopy[event.target.name] = event.target.value;
//     setuser(userCopy);
//     console.log(user);
//   };

//   return (
//     <div>
//       <form onClick={valid}>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="name"
//           value={user.name}
//         />
//         <input
//           onChange={handleChange}
//           type="text"
//           name="mail"
//           value={user.mail}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Register;
