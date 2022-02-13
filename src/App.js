var express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const initRouts = require("./actions");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
initRouts(app);

const port = process.env.port || 30666;
const host = "localhost";
app.listen(port);
console.log(`DEVOPS EMULATOR running on http://${host}:${port}`);
