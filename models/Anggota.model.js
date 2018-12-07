var mongoose = require("mongoose");

const AnggotaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  no_tlp: {
    type: String,
    required: true
  },
  tgl_masuk: {
    type: Date,
    default: Date.now()
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('anggota', AnggotaSchema);