//routes are created  like post or get for every route object like if banking hoga toh rtgs ,imps sabki routes alag hogi

const express = require("express");
const {
  getData,
  updateById,
  insertOne,
  deleteById,
} = require("../controller/crudcontroller");
const router = express.Router();

router.get("/getAllData", getData);
router.post("/insertOne", insertOne);

router.delete("/deleteById/:id", deleteById); //deleting using params

router.put("/update-student", updateById);//updating using body

module.exports = router;
