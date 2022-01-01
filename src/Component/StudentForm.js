import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Data({setAdded,added}) {
// as we want to rerender when data added we import added and setadded from app.js

  const [userData, setUserData] = useState({
    Firstname: "",
    Lastname: "",
    Age: null,
    Field: "",

  });

  const handleChange = (event) => {
    setUserData({...userData,[event.target.name]:event.target.value});
    // console.log(userData)
  };
// to add data to db
  const AddData = (event) => {
  event.preventDefault()
 
     console.log(userData);
    axios
      .post("http://localhost:9090/api/insertOne",userData)
      .then((data) => {
        console.log("data added")
        setAdded(!added)
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("data sent");
  };


  useEffect(()=>{


  },[AddData,userData])

  return (
    <div style={{ backgroundColor: "black" }}>
      
      <br />
      <br />
      <div class="row">
        <div class="col-md-2">
          <input
            type="text"
            class="form-control"
            name="Firstname"
            placeholder="First name"
            aria-label="First name"
            onChange={handleChange}
          />
        </div>
        <div class="col-md-2">
          <input
            type="text"
            name="Lastname"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onChange={handleChange}
          />
        </div>

        <div class="col-md-2">
          <select
            id="inputState"
            name="Field"
            class="form-select"
            onChange={handleChange}
          >
            <label for="inputState" class="form-label">
              field
            </label>
            <option selected>Choose Field</option>
            <option value="EXTC">EXTC</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
          </select>
        </div>

        <div class="col-md-1">
          <input
            type="number"
            class="form-control"
            name="Age"
            placeholder="Age"
            aria-label="Age"
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <button type="button" class="btn btn-success" onClick={AddData}>
          Submit
        </button>
      </div>
    </div>
  );
}
