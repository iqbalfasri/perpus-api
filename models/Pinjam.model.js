var mongoose = require("mongoose");
var { Schema } = mongoose;

const PinjamSchema = mongoose.Schema({
  no_anggota: [{ type: Schema.Types.ObjectId, ref: "anggota" }],
  no_buku: [{ type: Schema.Types.ObjectId, ref: "buku" }],
  tgl_pinjam: {
    type: Date
  },
  tgl_kembali: {
    type: Date
  }
});

module.exports = mongoose.model("pinjam_buku", PinjamSchema);
