const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 1234;

const myURI = "mongodb+srv://eddieCho:<password>@workouts.cdqw2dy.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "workouts" })
  .then(() => console.log('Connected to MOngoDB'))
  .catch(err => console.log(err));