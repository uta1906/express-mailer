const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Users = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [5, 25],
        msg: "check your username again",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [5, 25],
        msg: "check your email again",
      },
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [10, 30],
        msg: "check your phone again",
      },
    },
  },
});

module.exports = { Users };
