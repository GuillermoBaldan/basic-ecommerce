var Cerveza = require("../models/Cervezas");

var miCerveza = new Cerveza({ name: "Ambar" });
miCerveza.save(function (err, miCerveza) {
  if (err) return console.error(err);
  console.log("Guardada en bbdd" + miCerveza.name);
});
