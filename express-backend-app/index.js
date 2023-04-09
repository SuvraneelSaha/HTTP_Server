const express = require("express");
const app = express();
const port = 3000;

const USERS = [];

const QUESTIONS = [
  {
    title: "Two States",
    description: "Given an array , return the maximum of the array",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const SUBMISSION = [];

app.get("/route1", function (req, res) {
  res.send("Hello World!");
});

app.get("/route2", function (req, res) {
  res.send("Hello World! from route 2!");
});
// we can add more and more routes to it
app.get("/chat", function (req, res) {
  res.send(`<html>
    <body>
        <h1 style="color : red">Chat</h1>
    </body>
</html>`);
});

app.get("/route3", function (req, res) {
  res.json({
    name: "Johnny",
    age: 30,
  });
});

app.post("/signup", function (req, res) {
  // add logic to decode body
  // body should have email password

  // store email and password (as  in for now ) in the USERS array above(only if the
  // user with the given email dosen't exist)

  // return back 200 status code to the client

  res.send("Sign up!");
});

app.post("/login", function (req, res) {
  // add logic to decode body
  // body should have email and password

  // check if the user with the given email exists in the USERS Array
  // Also ensure that the password is the same

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client

  res.send("Hello World!");
});

app.get("/questions", function (req, res) {
  // return the user all the questions in the QUESTIONS Array

  res.send("Hello World!");
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem

  res.send("Hello World!");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem , randomly accept or reject the solution
  // store the submission in the SUBMISSION Array above

  res.send("Hello World!");
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that

// up until this point if we write the code we wont get anything cause we havent started the hhtp server yet
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

// this app.listen is the function through which the http server starts

// ChatGpt Tasks
// go step by step
// 1]hey - what is the right way to sign up
// 2]hey what is the right way to sign in and send back an authentication token
// 3]what are the authentication tokens that are used in the industry
// 4]how do 1 make sure that the authentication user is send back to the user and they store it in the
// browser and send back in every subsequent request
// 5]how do i make sure when the user clicks on the logout button then the autentication
// token of their browser gets cleared

// All the above code is a HTTP server
// and it is similar to most of the HTTP server which is used in any MERN stack backend

// how HTTP Server works
// first when the client side user sends a http request it could be POST or GET then the HTTP server in the backend
// validates the request and sends back the necessary files like json , html , text back the the user or client
