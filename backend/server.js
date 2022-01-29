let express = require("express"); //llamamos a Express
let app = express();

let port = process.env.PORT || 8080; // establecemos nuestro puerto

app.get("/", function (req, res) {
  res.json({ mensaje: "¡Hola Mundo!" });
});

app.get("/cervezas", function (req, res) {
  res.json({ mensaje: "¡A beber cerveza!" });
});

app.post("/pedir-cerveza", function (req, res) {
  res.json({ mensaje: "Método post" });
});

app.delete("/eliminar-cerveza", function (req, res) {
  res.json({ mensaje: "Método delete" });
});

// iniciamos nuestro servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
