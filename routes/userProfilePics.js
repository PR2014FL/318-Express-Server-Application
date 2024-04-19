const express = require("express");
const router = express.Router();
const userProfilePics = require("../data/userProfilePics");


router
.route("/")
.get((req, res) => {
  res.send(userProfilePics);
});


module.exports = router;