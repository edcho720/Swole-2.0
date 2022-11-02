/* 
challenges Notes:

1. setting up the proxy between front and back, needed to edit config in webpack
2. timer functionality -> could not get clearInterval to work, settled for conditional rendering to solve issue
3. getting numbers to add up from prop values, had to Number() them first

CRUD:

post:
4. could not get POST req to save data in cloud MongoDB -> the req. I placed on certain properties in my model or schema
get:
POST NOT working now -> issue was with a DB option when seeting up the MongoDB connection
the option to speficy DB name I had it as uppercasw W, and in DB it was lowercase !!!
5. issues receiving the res from GET req, expecting an array..., not able to GET the data, spent HOURS on this so far...
Actually had to step away and do something else... same solution as above literally took me 10 hours!



***6. issues getting a route to work for the login page when i type in the url into the browser directly, only links
from the <LINK /> via browser router setup, OR when page refreshes, doesn't stay ON
***7. need to land on login page for routes, then once signed in go to formCards page - its reversed rightnow
*/






/* 
Mongo settings notes:
const express = require('express');
const app = express();
// Import the mongoose module
const mongoose = require('mongoose');
const PORT = 1234;
// connect to mongo via online Atlas
// const { MongoClient, ServerApiVersion } = require('mongodb');
const myURI = "mongodb+srv://eddieCho:NPkk5YuXPru85nTJ@workouts.cdqw2dy.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(myURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "workouts" })
  .then(() => console.log('Connected to MOngoDB'))
  .catch(err => console.log(err));

// eddieCho
// NPkk5YuXPru85nTJ

// 98.246.147.124/32
// My IP Address

// mongodb Node.js driver connection string
// mongodb+srv://eddieCho:NPkk5YuXPru85nTJ@workouts.cdqw2dy.mongodb.net/?retryWrites=true&w=majority
*/

/* 
// app.use(express.static(path.join(__dirname, '../src')));

// app.get('/', (req, res) => {
//   return res
//     .set('Content-Type', 'text/html')
//     .status(200) // does not end a req/res cycle on its own
//     .sendFile(path.join(__dirname, '../src/index.html'));
// });

// app.get('/style.css', (req, res) => {
//     return res  
//       .set('Content-Type', 'text/css')
//       .status(200)
//       .sendFile(path.join(__dirname, '../src/style.css'));
//   });
*/