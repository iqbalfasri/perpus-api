var express = require("express");
var router = express.Router();

const buku = require("../controllers/Buku.controller");

router.get("/", (req, res) => {
  res.json("Main endpoint api");
});

router.post("/create", buku.create);
router.get("/buku", buku.findAll);
router.route("/buku/:bId")
  .get(buku.findOne)
  .put(buku.update)
  .delete(buku.delete);

module.exports = router;
