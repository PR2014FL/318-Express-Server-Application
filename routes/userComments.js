const express = require("express");
const router = express.Router();
const userComments = require("../data/userComments");


router
.route("/")
.get((req, res) => {
  res.send(userComments);
})
.patch((req, res) => {
    res.send("Receive a PATCH request to edit comments.");
});




module.exports = router;