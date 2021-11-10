const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const mailer = require("./mailer/business");
const projetBusiness = require("./projects/business");

/******connect to database********/

require("./DB/DBconnection").ConnectionToMongoDatabase();

/********** cors config*******/

app.use(
  cors({
    origin: "ORIGIN ENDPOINT",
    credentials: true,
    optionSuccessStatus: 200,
    methods: ["GET", "POST"],
  })
);

/**********midelware*******/

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("x-powered-by", false);
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

/*******Router*******/

app.post("/api/send_mail", (req, res) => {
  console.log("send mail req");
  mailer(req, res);
});

app.post("/api/project", (req, res) => {
  projetBusiness.createProject(req, res);
});

app.get("/api/project", (req, res) => {
  projetBusiness.getProjects(req, res);
});
app.get("/cv", function (req, res) {
  res.sendFile("cv.pdf", { root: "./public" });
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/********** Route Not Found Handler **********/

app.use((req, res, next) => {
  var error = new Error("Route Not Found");
  error.status = 404;
  next(error);
});

/********** ERROR Handler **********/

app.use((err, req, res, next) => {
  const error = err.message || "some error happen";
  const status = err.status || 500;
  res.status(status).send({ error });
});

module.exports = app;
