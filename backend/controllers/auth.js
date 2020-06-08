const { findByUsername, addNewUser } = require('../database/queries');


exports.loginPage = (req, res) => {
  res.render("login", { activePage: { login: true } });
};
exports.registerPage = (req, res) => {
  res.render("register", { activePage: { register: true }, error: "" });
};

