import React, { useState } from "react";

function Table(props) {
  const [array, setarray] = useState([]);
  console.log(props.user);
  const fname = props.user.fname;
  const lname = props.user.lname;
  const email = props.user.email;
  const date = props.user.date;

  const localStorages = () => {
    if (fname !== "" && lname !== "" && email !== "" && date !== "") {
      setarray([
        ...array,
        {
          fname: fname,
          lname: lname,
          email: email,
          date: date,
        },
      ]);

      localStorage.setItem(
        "data",
        JSON.stringify([
          ...array,
          {
            fname: fname,
            lname: lname,
            email: email,
            date: date,
          },
        ])
      );
    } else {
      console.log("vccn");
    }
  };

  const get = localStorage.getItem("data");
  const create = JSON.parse(get);

  const clear = () => {
    localStorage.clear();
    setarray([]);
  };

  return (
    <div>
      <input
        type="submit"
        onClick={localStorages}
        className="table-submit"
        value="DISPLAY"
      />
      <input
        type="submit"
        onClick={clear}
        className="table-submit"
        value="CLEAR"
      />

     { create && <table
        className="table table-bordered border-primary"
        align=" center"
        cellSpacing="20px"
        cellPadding="20px"
      >
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Dob</th>
          </tr>
        </thead>
        <tbody>
          {get
            ? create?.map((val, ind) => (
                <tr>
                  <td key={ind}>{ind}</td>
                  <td>{val.fname}</td>
                  <td>{val.lname}</td>
                  <td>{val.email}</td>
                  <td>{val.date}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table> }
    </div>
  );
}

export default Table;
