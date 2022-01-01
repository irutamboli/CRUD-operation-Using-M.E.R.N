import React, { useState,useEffect } from "react";
import axios from "axios"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({open,handleOpen,handleClose,eleData}) {
  

//creating states(to save) or to change or Edit its values
const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [age,setAge] = useState()
const [field,setField] = useState("")

 

function sampleFunc(e){
setFirstName(eleData.Firstname = e.target.value)

}

function sampleFunc1(e){
  setLastName(eleData.Lastname = e.target.value)
  }

  function sampleFunc2(e){
  
    setAge(eleData.Age = e.target.value)
    }


    function sampleFunc3(e){
      
      setField(eleData.Field = e.target.value)
      
      }

function submitFunc(){
  //now save all data in a payload(edited data) to server
  const payload = {Firstname:firstName,_id:eleData._id,Lastname:lastName,Age:age,Field:field}
  axios.put(`http://localhost:9090/api/update-student`,payload).then(data=>{

  }).catch(error=>{
    console.log(error);
  })
}

  


  

  
  

  
  return (
    <div>
        
 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            EDIT 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
        
              <div>
                <input
                  type="text"
                  class="form-control"
                  name="Firstname"
                  placeholder="First name"
                  aria-label="First name"
                  onChange={sampleFunc}
                  value={eleData?eleData.Firstname:""}//values to be updated are shown in editmodal we use this
                  
                />
              </div>
              <div >
                <input
                  type="text"
                  name="Lastname"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  onChange={sampleFunc1}
                  value={eleData?eleData.Lastname:""}//values to be updated are shown in editmodal we use this
                />
              </div>

              <div >
                <select
                  id="inputState"
                  name="Field"
                  class="form-select"
                  onChange={sampleFunc3}
                  value={eleData?eleData.Field:""}//values to be updated are shown in editmodal we use this
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
                  onChange={sampleFunc2}
                  value={eleData?eleData.Age:""}//values to be updated are shown in editmodal we use this 
                />
              </div>
              <br />
              <br />
              <br />
              <br />
              <button type="button" class="btn btn-success"onClick={submitFunc}>
                Edit
              </button>
              
              <button  type="button" onClick={handleClose} class="btn btn-success">
                X
              </button>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
