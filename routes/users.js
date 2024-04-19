const express = require("express");
const router = express.Router();
const users = require("../data/users");


router
  .route("/")
  .get((req, res) => {
    res.send(users);
  })
 .post((req, res) => {
    if (req.body.name && req.body.age && req.body.street && req.body.city) {
      const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        age: req.body.age,
        address: {
          street: req.body.street,
          city: req.body.city,        
        }
      };

      users.push(user);
      res.json(users[users.length - 1]);
      // res.json({ message: 'Data added successfully', data: outerObject });
    } else res.json({ error: "Insufficient Data" });
  });

router
.route("/:id")
.get((req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
  else next();
})
.patch((req, res, next) => {
  const user = users.find((u, i) => {
    if (u.id == req.params.id) {
      for (const key in req.body) {
        users[i][key] = req.body[key];
      }
      return true;
    } 
  });
  if (user) res.json(user);
  else next();
});


router.use((req, res) => {//Error handler middleware
  res.status(404);
  res.json({ error: "Resourse Not Found" });
});

module.exports = router;
