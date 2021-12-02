// SuperCool/backend/index.js

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const users = [
  { email: "hello@gmail.com", pwd: "123" },
  { email: "helloagain@gmail.com", pwd: "456" },
];

app.get("/get-users", (req, res) => {
  res.json(users);
});

// Server will respond with json message "Hello World" at /hello
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Server will listen at Port 3001
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//
