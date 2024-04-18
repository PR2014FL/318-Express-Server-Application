const express = require("express");
const path = require("path");
const users = require("./data/users");
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

app
.route("/")
.get( (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app
.route("/users")
.get((req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server Running in Port:${port}`);
})
