const app = require("express")();
const consign = require("consign");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

consign().include("connection")
.then("routes")
.into(app);