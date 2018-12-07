const Pinjam = require("../models/Pinjam.model");

class PinjamController {
  static create(req, res) {
    let { tgl_pinjam, tgl_kembali, id_anggota, id_buku } = req.body;
    const pj = new Pinjam({
      tgl_pinjam: tgl_pinjam,
      tgl_kembali: tgl_kembali,
      id_anggota: id_anggota,
      id_buku: id_buku
    });

    // Save pinjam ke dalam Database
    pj.save()
      .then(data => {
        res.status(201).json({
          data: data,
          message: "Success"
        });
      })
      .catch(er => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static findAll(req, res) {
    Pinjam.find()
      .then(data => {
        res.status(200).json({
          data: data,
          message: "Success"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static findOne(req, res) {
    let { pId } = req.params;
    Pinjam.findById(pId)
      .then(data => {
        res.status(200).json({
          data: data,
          message: "Success"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static update(req, res) {
    let { pId } = req.params;
    let { tgl_pinjam, tgl_kembali } = req.body;
    let updatedPinjam = {};

    // Kondisi untuk merubah data berdasarkan
    // value yang dimasukan dalam request body
    if (tgl_pinjam) {
      updatedPinjam.tgl_pinjam = tgl_pinjam;
    }

    if (tgl_kembali) {
      updatedPinjam.tgl_kembali = tgl_kembali;
    }

    Pinjam.findByIdAndUpdate(pId, updatedPinjam, { new: true })
      .then(updated => {
        res.status(201).json({
          data: updated,
          message: "Success"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static delete(req, res) {
    let { pId } = req.params;
    Pinjam.findByIdAndDelete(pId)
      .then(() => {
        res.status(200).json({
          message: "Success"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }
}

module.exports = PinjamController;
