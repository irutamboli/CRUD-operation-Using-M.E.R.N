import React,{useEffect,useState} from "react";
import {Table,Button} from "react-bootstrap"
import axios from "axios"
import Header from "./Component/Header";
import StudentForm from "./Component/StudentForm"
import EditModal from "./Component/EditModal";


function App() {
//edit modal opening code
  const[eleData,setEleData]=useState()

  const [open, setOpen] = useState(false);
  //handle open func and sending complete data of a student in arguments(idData)
  const handleOpen = (idData) =>{
    setEleData(idData)

    setOpen(true);
  } 

const handleClose = () => setOpen(false);

// to add data to db
const[added,setAdded]=useState(false);
//to fetch or get all data
const [state,setState]=useState([])
// to delete particular data
const [deleted,setDeleted]=useState(false)

//delete function
function delData(id){

axios.delete(`http://localhost:9090/api/deleteById/${id}`).then(data=>{
setDeleted(!deleted)

}
).catch(error=>{
  console.log(error)
})
}


// to get all data
  useEffect(()=>{
   
    axios.get("http://localhost:9090/api/getAllData").then(data=>{
      // console.log(data.data.data);
      setState(data.data.data)


    }).catch(error=>{
      console.log(error);
    })

  },[added,deleted])

  return (
    <> 

 <Header/>
 <StudentForm setAdded={setAdded} added={added}/>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Field</th>
      <th>Age</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      state.map((ele,i)=>(
        
        <tr>
        <td >{ele,(i++)+1}</td>
        <td >{(ele.Firstname)}</td>
        <td >{ele.Lastname}</td>
        <td >{ele.Field}</td>
        <td >{ele.Age}</td>
       
        <td> <Button variant="primary" as="input" type="button"  value="Update"  onClick={()=>handleOpen(ele)}/></td> 
        
        <td><Button variant="danger" as="input"  type="button" value="Delete"  onClick={()=>delData(ele._id)} /></td>
  
  
      </tr>
      //in Update button handleopen func as we have to send a single object about student i.e we send complete(ele or data) 
      //of that student in the argument of handleopen so we can get that on edit modal


      //in delete func we use id to del that particular data

    

      ))
    }
   
    
  </tbody>
</Table>

<EditModal  handleOpen={handleOpen}  handleClose={handleClose} open={open} eleData={eleData}/>







 
   
 </>
    
  );
}

export default App;
