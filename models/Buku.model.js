var mongoose = require("mongoose");

const BukuSchema = mongoose.Schema({
  judul: {
    type: String,
    required: true
  },
  pengarang: {
    type: String,
    required: true
  },
  penerbit: {
    type: String,
    required: true
  },
  tahun_terbit: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('book', BukuSchema);