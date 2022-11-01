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


const workoutsApi = require('./routes/workouts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use('/api/workouts', workoutsApi);

// app.get('/api', (req, res) => {
//     res.send('hello buddy');
// });

// 404 handler, catch-all error-handler
app.use('*', (req, res) => {
    return res
      /* .set('Content-Type', 'text/html') */
      .sendStatus(404)
      /* .sendFile(path.join(__dirname, './client/404.html')); */
  });
  

// Global error handling middleware
// How can we trigger this to run? 
// this triggers if ever next gets invoked
// from inside a middleware function with an arg passed in
app.use((err, req, res, next) => {
    // default error object: passed in err obj will overwrite default property values
      const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
      };
    
      const errorObj = Object.assign({}, defaultErr, err); // creating a new error obj
      // with a new label so it has a new reference inside the heap
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
      // best practice to always end the req/res cycle with return
      // sending back res obj with error details
    });
  

    // server object listens on PORT = 1234
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

/* Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
Get the default connection
const db = mongoose.connection;
Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI); */