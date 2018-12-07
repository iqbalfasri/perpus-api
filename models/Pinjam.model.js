var mongoose = require("mongoose");
var { Schema } = mongoose;

const PinjamSchema = mongoose.Schema({
  id_anggota: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "anggota",
    required: true
  },
  id_buku: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "buku",
    required: true
  },
  tgl_pinjam: {
    type: Date,
    required: true
  },
  tgl_kembali: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("pinjam_buku", PinjamSchema);
