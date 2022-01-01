//controllers are their to send response and req ffrom server

const User = require("../models/User");

exports.getData = async (req, res) => {
  try {
    const data = await User.find();
    res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
};

// exports.updateById= async (req,res) => {
// try {
//     const id =req.params._id;
//     const data = await User.findById(_id);
//     res.json({data:data})
// } catch (error) {
//     console.log(error)
// }
// }

exports.updateById = async (req, res) => {

  try {
    const data = await User.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    res.json({message: "data updated",data:data })
  } catch (error) {
   throw new Error(error)
  }
};

exports.insertOne = async (req, res) => {
  console.log(req.body);
  try {
    const data = await User.create(req.body);
    res.json({ message: "Data Added", data: data });
  } catch (error) {
    console.log(erorr);
  }
};

exports.insertMany = async (req, res) => {
  console.log(req.body);
  try {
    const data = await User.create(req.body);
    res.json({ message: "Data added", data: data });
  } catch (error) {
    console.log(erorr);
  }
};

exports.deleteById = async (req, res) => {
console.log(req.body)
  try {
    const data = await User.deleteOne({ _id: req.params.id });
    res.json({ message: "Data deleted", data: data });
  } catch (error) {
    console.log(error);
  }
};
