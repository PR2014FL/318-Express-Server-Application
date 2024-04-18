const express = require("express");
const path = require("path");
const users = require("./data/users");
const comments = require("./data/userComments");
const profilePics = require("./data/userProfilePics");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

__dirname = path.dirname(require.main.filename);

function logReq(req, res, next) {
  console.log(`Request initiated at ${req.url}`);
  next();
}
app.use(logReq);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.route("/api/users").get((req, res) => {
  res.send(users);
});

app.route("/api/ProfilePics").get((req, res) => {
  res.send(profilePics);
});

app.route("/api/Comments").get((req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server Running in Port:${port}`);
});
