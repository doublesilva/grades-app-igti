console.log('Call express');
const express = require("express");
console.log('Call express-favicon');
const favicon = require("express-favicon");
console.log('Call path');
const path = require("path");
console.log('Call env', process.env.PORT);
const port = process.env.PORT || 3001;
console.log('Call init express');
const app = express();

function Main() {
  try {
    console.log("Init main");
    app.use(favicon(__dirname + "/build/favicon.ico"));
    console.log("Call favicon");
    // the __dirname is the current directory from where the script is running
    app.use(express.static(__dirname));
    console.log("Call set dirname");
    app.use(express.static(path.join(__dirname, "build")));
    console.log("Call set dirname build");
    app.get("/ping", function (req, res) {
      console.log("Call ping");
      return res.send("pong");
    });
    console.log("Call set path defaul");
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });
    console.log("Call set listen port", port);
    app.listen(port);
  } catch (error) { console.log('Erro main', error);}
}
console.log("Call main");
Main();
