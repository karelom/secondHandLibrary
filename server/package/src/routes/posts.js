const express = require("express");
const Login = require("../mongoDB");
const Mongoose = require("mongoose");

const router = express(); // sub app

// show DB
router.get("/", (req, res) => {
  loadUserCollection().find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// find token and return corresponding username
router.get("/cookie", (req, res) => {
  loadUserCollection().find(
    {
      cookie_token: req.query.token,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json(result[0].username);
      }
    }
  );
});

// Check User Data
router.post("/login", async (req, res) => {
  await loadUserCollection().find(
    {
      username: req.body.user.acc,
      password: req.body.user.pw,
    },
    (err, result) => {
      if (err) console.error(err);

      if (Array.prototype.isPrototypeOf(result) && result.length === 0)
        res.status(200).send("使用者登入失敗");
      else res.status(200).send(result[0].cookie_token);
    }
  );
});

// Add User Data
router.post("/", async (req, res) => {
  const Login = loadUserCollection();
  const newUser = new Login({
    cookie_token: req.body.user.token,
    username: req.body.user.acc,
    password: req.body.user.pw,
  });
  await Login.find({
    username: newUser.username,
    password: newUser.password,
  }).countDocuments(async (err, count) => {
    if (count < 1) {
      await newUser.save((err) => {
        if (!err) {
          res.status(201).send("使用者創建成功");
          return;
        }
        res.status(200).send("使用者創建失敗");
        return console.error(err);
      });
    } else {
      res.status(200).send("使用者創建失敗 - [帳戶已存在]");
    }
  });
});

// Delete User Data
router.delete("/:id", async (req, res) => {
  await loadUserCollection().findOneAndDelete(
    {
      _id: req.params.id,
    },
    (err) => {
      if (err) {
        res.status(200).send("使用者刪除失敗");
        return console.error(err);
      }
    }
  );
  res.status(201).send("使用者刪除成功");
});

// Update User Data
router.put("/", async (req, res) => {
  await loadUserCollection().findOneAndUpdate(
    {
      // find
      _id: "601217e1cc041b4ac8c406ba",
    },
    {
      // update
      username: req.body.user.acc,
      password: req.body.user.pw,
    },
    (err) => {
      if (err) {
        res.status(200).send("使用者更新失敗");
        return console.error(err);
      }
    }
  );
  res.status(201).send("使用者更新成功");
});

// load collection
function loadUserCollection() {
  return Mongoose.model("Login");
}

module.exports = router; // for express 3.0+
