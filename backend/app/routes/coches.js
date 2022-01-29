var router = require("express").Router();
router.get("/search", function (req, res) {
  res.json({ message: "Vas a buscar una coche" });
});
router.get("/", function (req, res) {
  res.json({ message: "Estás conectado a la API. Recurso: coches" });
});
router.get("/:id", function (req, res) {
  res.json({ message: "Vas a obtener la coche con id " + req.params.id });
});
router.post("/", function (req, res) {
  res.json({ message: "Vas a añadir una coche" });
});
router.put("/:id", function (req, res) {
  res.json({ message: "Vas a actualizar la coche con id " + req.params.id });
});
router.delete("/:id", function (req, res) {
  res.json({ message: "Vas a borrar la coche con id " + req.params.id });
});
module.exports = router;
