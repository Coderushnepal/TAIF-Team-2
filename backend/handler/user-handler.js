const client = require("../knexfile");
const knex = require("knex")(client);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

function register(req, res) {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const hashPassword = bcrypt.hashSync(password, 10);

  knex("user")
    .insert({ fullname, username, password: hashPassword, email })
    .then(() => res.json({ status: true, message: "User Created!!!" }))
    .catch(err => res.json({ status: false, message: err.message }));
}

function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  knex("user")
    .select()
    .where({ username })
    .then(data => {
      if (data.length > 0) {
        const hashPassword = data[0].password;
        if (bcrypt.compareSync(password, hashPassword)) {
          res.json({
            status: true,
            message: "Login Success!!!",
            token: jwt.sign({ username }, "mySecretKey"),
            user_id: data[0].id
          });
        } else {
          res.json({ status: false, message: "Password does not match." });
        }
      } else {
        res.json({ status: false, message: "Username not registered!!!" });
      }
    })
    .catch(err => res.json({ status: false, message: err.message }));
}

function sendMail(req, res) {
  const email = req.body.email;
  const message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amubhatta4@gmail.com",
      pass: "Bestfriend1@2"
    }
  });

  var mailOptions = {
    from: "saileshlimbu04@gmail.com",
    to: email,
    subject: "General Enquery",
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.json({ status: false, message: error.message });
    } else {
      res.json({ status: false, message: "Email Sent!!!" });
    }
  });
}

module.exports = {
  register,
  login,
  sendMail
};
