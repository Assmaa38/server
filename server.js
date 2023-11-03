const express = require('express');
const mongoose = require('mongoose');


let app = express();

//   connect server to mongo server => local DB
async function connect() {
    let connection = await mongoose.connect('mongodb://0.0.0.0:27017/assmaa');
    if (!connection) {
        console.log('noo')
    } else {
        console.log('DB now is connected')
    }
}
 connect()

 app.listen(3000, function () {
    console.log('server now is opened')
})


//schema
const Studentschema = new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    password : String,
    gender : String,
    id : Number,
    address : String,
    bio : String
});

//convert schema to model(class)
let StudentModel = new mongoose.model("Student", Studentschema);

//schema
const coursesSchema = new mongoose.Schema({
    name : String,
    description : String,
    id : Number
});

//convert schema to model(class)
let coursesModel = new mongoose.model("courses", coursesSchema);

//insert
let newStudent = new StudentModel({
    name : "Assmaa Ahmed",
    age : 20,
    phone : 01025123196,
    password : 'ab12c3',
    gender : "female",
    id : 259876,
    address :  "address",
    bio : "bio"
}).save();

let NohaStudent = new StudentModel({
    name : "Noha",
    age : 15,
    phone : 01022460196,
    password : 'a_12c3',
    gender : "female",
    id : 225776,
    address :  "address",
    bio : "bio"
}).save();

let newcourse = new coursesModel({
    name: "courseName",
    description: "description of the course",
  }).save();


//endpoint fetch all student from DB
//local host : 3000/Student
app.get('/Student',  async (req, res)=>{
    let allStudent = await StudentModel.find();
    res.status(200);
    console.log(allStudent.length)
    res.json(allStudent)
})


//endpoint fetch all  courses  from DB
app.get('/courses',  async (req, res)=>{
    let allcourses = await coursesModel.find();
    res.status(200);
    console.log(allcourses.length)
    res.json(allcourses)
})


app.get('/', (req, res)=>{
    res.send("Ahlan Wa Sahlan Beeeeeek")
})

