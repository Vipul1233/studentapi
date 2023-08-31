const express = require("express");
require("./src/db/conn");
// const bodyParser = require ('body-parser');
const Student = require("./src/models/students");
const App = express();
const port = process.env.PORT || 3000;
App.use(express.json());
App.get("/",(req,res)=>{
    res.send("hello fron the other side")
})
// App.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e);
//     })
//     // res.send("hello from other side");
// });
App.post("/students",async(req,res)=>{
    const user = new Student(req.body);
    const createuser = await user.save();
    res.status(201).send(createuser);
})
// read the data from the api
App.get("/students",async(req,res)=>{
      const getuser = await Student.find();
      res.send(getuser);
})
App.listen(port, () => {
    console.log(`connection is set up ${port}`);
})