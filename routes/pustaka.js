var express = require("express");
var router = express.Router();

const buku = require("../controllers/Buku.controller");
const anggota = require("../controllers/Anggota.controller");
const pinjam = require("../controllers/Pinjam.controller");

const index = require("./index");

// Route index
router.use("/", index);

// Route for books
router
  .route("/buku")
  .get(buku.findAll)
  .post(buku.create);
router
  .route("/buku/:bId")
  .get(buku.findOne)
  .put(buku.update)
  .patch(buku.update)
  .delete(buku.delete);

// Route for anggota
router
  .route("/anggota")
  .get(anggota.findAll)
  .post(anggota.create);
router
  .route("/anggota/:aId")
  .get(anggota.findOne)
  .put(anggota.update)
  .patch(anggota.update)
  .delete(anggota.delete);

// Route for Pinjaman
router
  .route("/pinjam")
  .get(pinjam.findAll)
  .post(pinjam.create);
router
  .route("/pinjam/:pId")
  .get(pinjam.findOne)
  .put(pinjam.update)
  .patch(pinjam.update)
  .delete(pinjam.delete);
module.exports = router;
