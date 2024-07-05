// Created API
const  userRoutes = require('./routes/userRoutes');
const notes = require('./data/notes');
const express = require("express");  //import Express
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB= require("./config/db");
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');


// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionSuccessStatus:200,
//     methods:"GET,PUT,POST"
// } 
// app.use(cors(corsOptions));
const app = express();
dotenv.config();
connectDB();

app.use(express.json());

//get = brings data from backed to frontend & serves it
app.get("/",(req,res)=>{
    res.send("API is running..");                              //create api endpoint 
});

app.get('/api/notes',(req,res) =>{
    res.json(notes);        //all data is fectched
});

app.use('/api/users',userRoutes);

/*app.get('/api/notes/:id', (req,res)=>{                       //only one notes is fectched with id
    const note = notes.find((n) => n._id === req.params.id);       
    res.send(note);
}); */

app.use(notFound);//middleWares
app.use(errorHandler);

const PORT= process.env.PORT || 5000; //Port from env file-it will use port from env file not found then it run on 5000

app.listen(PORT,console.log(`Server started on PORT ${PORT}`)); //web Server is Created 
