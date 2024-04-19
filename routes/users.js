const express = require("express");
const router = express.Router();
const users = require("../data/users");

router
  .route("/")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    res.send("Received a POST request for users.");
  });

module.exports = router;
