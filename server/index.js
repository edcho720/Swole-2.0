const express = require('express');
const app = express();
// Import the mongoose module
const mongoose = require('mongoose');
// Authorization:
const cookie = require('cookie-parser');
const PORT = 1234;
// connect to mongo via online Atlas
const myURI = "mongodb+srv://eddieCho:NPkk5YuXPru85nTJ@workouts.cdqw2dy.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true }) // deleted DB option 'W'
  .then(() => console.log('Connected to MOngoDB'))
  .catch(err => console.log(err));

const workoutApi = require('./routes/workouts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For Cookies
app.use(cookie());

app.use('/api/workouts', workoutApi);
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
      console.log('error:', err)
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