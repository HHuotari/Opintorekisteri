const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, osoite=?, luokkatunnus=? where idOpiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;