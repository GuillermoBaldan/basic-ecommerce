var router = require("express").Router();
var cervezas = require("./cervezas");
var coches = require("./coches");

router.use("/cervezas", cervezas);
router.use("/coches", coches);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API" });
});

module.exports = router;
