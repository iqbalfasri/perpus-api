const Anggota = require("../models/Anggota.model");

class AnggotaController {
  static create(req, res) {
    let { nama, email, no_tlp } = req.body;

    const anggota = new Anggota({
      name: nama,
      email: email,
      no_tlp: no_tlp
    });

    // Save anggota ke dalam Database
    anggota
      .save()
      .then(data => {
        res.status(201).json({
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

  static findAll(req, res) {
    Anggota.find()
      .then(data => {
        res.status(200).json({
          data: data,
          message: "Success"
        });
      })
      .catch(() => {
        res.status(500).json({
          data: null,
          message: "Internal server error"
        });
      });
  }

  static findOne(req, res) {
    let { aId } = req.params;
    Anggota.findById(aId)
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
    let { aId } = req.params;
    let { nama, email, no_tlp } = req.body;
    let updatedAnggota = {};

    // Kondisi untuk merubah data berdasarkan
    // value yang dimasukan dalam request body
    if (nama) {
      updatedAnggota.name = nama;
    }

    if (email) {
      updatedAnggota.email = email;
    }

    if (no_tlp) {
      updatedAnggota.no_tlp = no_tlp;
    }

    Anggota.findByIdAndUpdate(aId, updatedAnggota, { new: true })
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
    let { aId } = req.params;
    Anggota.findByIdAndDelete(aId)
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

module.exports = AnggotaController;
