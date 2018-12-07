const Buku = require("../models/Buku.model");

class BukuController {
  static create(req, res) {
    let { judul, pengarang, penerbit, tahun_terbit } = req.body;

    // Create Buku
    const buku = new Buku({
      judul: judul,
      pengarang: pengarang,
      penerbit: penerbit,
      tahun_terbit: tahun_terbit
    });

    // Save buku ke dalam Database
    buku
      .save()
      .then(data => {
        res.status(201).json({
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

  static findAll(req, res) {
    Buku.find()
      .then(buku => {
        res.status(200).json({
          data: buku,
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
    let { bId } = req.params;
    Buku.findById(bId)
      .then(buku => {
        if (!buku) {
          return res.status(404).json({
            data: null,
            message: "Buku tidak ditemukan"
          });
        }
        res.status(200).json({
          data: buku,
          message: "Success"
        });
      })
      .catch(error => {
        if (error.kind === "ObjectId") {
          return res.status(404).json({
            data: null,
            message: "Buku tidak ditemukan"
          });
        }

        return res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static update(req, res) {
    let { bId } = req.params;
    let { judul, pengarang, penerbit, tahun_terbit } = req.body;
    let updatedBuku = {};

    // Kondisi untuk merubah data berdasarkan
    // value yang dimasukan dalam request body
    if (judul) {
      updatedBuku.judul = judul;
    }

    if (pengarang) {
      updatedBuku.pengarang = pengarang;
    }

    if (penerbit) {
      updatedBuku.penerbit = penerbit;
    }

    if (tahun_terbit) {
      updatedBuku.tahun_terbit = tahun_terbit;
    }

    Buku.findByIdAndUpdate(bId, updatedBuku, { new: true })
      .then(updated => {
        res.status(201).json({
          data: updated,
          message: "Succes"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static delete(req, res) {
    let { bId } = req.params;
    Buku.findByIdAndUpdate(bId)
      .then(() => {
        res.status(200).json({
          message: "Berhasil hapus buku"
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Internal server error"
        });
      });
  }
}

module.exports = BukuController;
