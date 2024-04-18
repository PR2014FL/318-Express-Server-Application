const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;


__dirname = path.dirname(require.main.filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.listen(port, () => {
    console.log(`Server Running in Port:${port}`);
})
