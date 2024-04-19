const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users");
const usersProfilesPicsRouter = require("./routes/userProfilePics");
const userComments = require("./routes/userComments");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

__dirname = path.dirname(require.main.filename);

app.use(logReq); //logging middleware for requests and responses info

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.engine("josue", (filePath, options, callback) => {
  // template engine
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify directory
app.set("view engine", "josue"); // register the template engine

app.use("/api/users", usersRouter);
app.use("/api/ProfilePics", usersProfilesPicsRouter);
app.use("/api/Comments", userComments);

app.get("/info", (req, res) => {
  const options = {
    title: "Rendering Views",
    content: `Here, I've created a basic express template engine using <code>app.engine()</code>
      and the <code>fs</code> module, then used <code>res.render</code> to
      render this page using custom content within the template.`,
    // "Here, I've created a basic template engine using <code>app.engine()</code> \//the slashes didn't work here it caused my ap to crash
    // and the <code>fs</code> module, then used <code>res.render</code> to \
    // render this page using custom content within the template. \",
  };
  res.render("index", options);
});

app.route("/").get((req, res) => {//index route
  res.sendFile(__dirname + "/views/index.html");
});

function logReq(req, res, next) {
  //Logging Middleware function needs to be down here for the response logging to occur as a synchronous action
  console.log(`Request initiated: ${req.method} ${req.url}`);
  next();
  console.log(`Outgoing Response: ${res.statusCode}`);
}

app.listen(port, () => {
  console.log(`Server Running in Port:${port}`);
});
