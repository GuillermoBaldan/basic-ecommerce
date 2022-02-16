var express = require("express"); //llamamos a Express
var app = express();
var bodyParser = require("body-parser");
require("./db");
var Cerveza = require("./models/Cervezas");

var port = process.env.PORT || 8080; // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require("./routes");
app.use("/api", router);

//arrancamos el servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);

/* var miCerveza = new Cerveza({ Nombre: "Espumosa" });
miCerveza.save(function (err, miCerveza) {
  if (err) return console.error(err);
  console.log("Guardada en bbdd" + miCerveza.name);
}); */
