const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const userHandler = require("./handler/user-handler");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user/register", userHandler.register);
app.post("/user/login", userHandler.login);
app.post("/sendMail", userHandler.sendMail);

app.listen(3000, () => console.log("Server running on port 3000"));
