// dependencies
const express = require('express');
const mongojs = require('mongojs');

//initialize express
const app = express();

// Database configuration
// Save the name/URL of our database as well as the name of our collection
var databaseName = "cloud";
var toDoCollection = ["todo"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseName, toDoCollection);

//Log errors if mongodb runs into an issue
db.on("error", function(error){
 console.log("Database error: ", error);
});

// Routes

// 1. At the root path, send a message to the browser
app.get("/", function(req, res) {
 res.send("Message to the Browser!");
});

// 2. At the "/all" path, display every entry in the to-do collection
app.get("/all", function(req, res){
// Query: In database, go to the todo collection, then "find" everything
  db.todo.find({}, function(error, found) {
//Log any errors if the server encounters one
    if (error) {
      console.log(error)
    } 
// send the result of this query to the browser    
    else {
      res.json(found);

    }
  });
});

const port = 8080

app.get('/', (req, res) => res.send("To Do List Data Here"))

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});