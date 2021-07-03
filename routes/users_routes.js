const express = require("express");
const { Users } = require("../model/Model");
const { welcomeMail } = require("../util/mailer");
const users = express.Router();

users.post("/register", (req, res) => {
  const data = req.body;
  Users.create(data)
    .then((result) => {
      welcomeMail(data.email, data.username).then(() => {
        res.status(201).json({
          success: true,
          data: result,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err,
      });
    });
});

users.post("/register-read", (req, res) => {
  Users.findAll({
    attributes: ["username", "email", "phone"],
  })
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        error: err,
      });
    });
});

users.post("/login", (req, res) => {
  const data = req.body;
  Users.findOne({ where: data, attributes: ["id", "username", "phone"] })
    .then((result) => {
      if (result) {
        res.status(200).json({
          success: true,
          data: result,
        });
      } else {
        res.status(404).json({
          success: false,
          msg: "check again your password",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        error: err,
      });
    });
});

module.exports = users;
