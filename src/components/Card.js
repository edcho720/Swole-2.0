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
// 8. Most recent BLOCK: workoutcard component not rendering, but first was not getting the data bc of fetch asyn nature, the issue 
// as i was receiving the props in my component I wasn't destructuring it properly, i had the dot notation reverse so
the variable was undefined and I was using it and concole.loggin it in places so it wouldn't render
// observed Eric's process of using the console log error very efficiently to understand 
where the issues are, new errors are good, meaning progress.

his advise: get sleep lol, debugging is def a skill, read your console carefully it will lead you to the solution. Also about MONGO - what happens if like say you nam, but you mean name:
mongo will see that and just delete it from the query obj so it will default to a search for everything or an { }, so have to be precise
about the property names you use to make queries (be exact), like for _id, make sure you call it _id: req.params.id

ok ya'll this is for all of yous Gym Bros, Meat heads and Fitness Enthusiasts but especially for anyone who's
looking to really make the most of your time working out. Workout Logger will help you to keep track of your
progress in the gym by keeping a record of your workouts. Its well-known that doing so 
really can help you achieve your goals through progressive overload. Demo..

As far as challenges go all I'll say is that there were many and actaully everything and to go into detail about what the actual bug was is actually prettty unimpressive and anti-climatic.
So I'll focus on the benefits I gains from the experience. Really for me, it was the hours and hours of trying to figure out: why doesn't this work, when I KNOW that it SHOULD work.
What actaully happened was I was forced to meticulously comb through every piece of code, logic and technology to find the bug and doing so I was 
able ti really cement my understanding of how things are supposed to work together cohesively. ou don't just figure out what was wrong by the time you fix the bug, the process itself 
is an amazing learning experience. I don't think I've ever relied on console logs as much as I did with this solo proj.

Also I want to give a sepecial shout out to our fellows, especially Katie Eric Chris and Crystal who were super helpful to me when I need them the most. You all will be dearly missed. Thank you.

Thanks Ya';; my only regret is I wasn't able to help others cause I was so deep in poop

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