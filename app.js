const express=require("express");
const { getData,insertOne,updateById } = require("./controller/crudcontroller");
const crudRoutes=require("./routes/crudRoutes")
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());// while sending data from postman like object etc its help 
//to convert it to json format if not used postman gives error while sending data.

app.use(express.urlencoded({extended:false}))
app.use("/api",crudRoutes) //collection of apis we use {app.use}
   



module.exports=app;
