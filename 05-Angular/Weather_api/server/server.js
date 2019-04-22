// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");
var path = require("path");
// var mongoose = require("mongoose");
var morgan = require("morgan");
// *****************************************************



// *****************  Express Setting  *****************
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./../client/dist")));
app.use(bodyParser.json());
// *****************************************************



// *****************  Mongoose Setting  ****************
//mongoose.connection("mongodb://localhost/my_weather");
// require("./model/weather");
// mongoose.Promist = global.Promise;
// *****************************************************



// *********************  Routing  *********************
require("./config/routes")(app);
// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("Listening on port " + port);
});
// *****************************************************

