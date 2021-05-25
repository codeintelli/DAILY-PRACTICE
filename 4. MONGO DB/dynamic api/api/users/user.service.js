const Pool = require("../../config/database");

module.exports = {
  save: (data, callback) => {
    Pool.query(
      `INSERT INTO registration(firstname, lastname, gender, email, password, number) VALUES (?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (err, result, field) => {
        if (err) {
          callback(err);
        }
        return callback(null, result);
      }
    );
  },

  findByEmail: (email, callback) => {
    Pool.query(
      `SELECT * FROM registration WHERE email = ?`,
      [email],
      (err, result, field) => {
        if (err) {
          callback(err);
        }
        return callback(null, result[0]);
      }
    );
  },
  findById: (id, callback) => {
    Pool.query(
      `SELECT id, firstname, lastname, gender, email, password, number FROM registration WHERE id = ?`,
      [id],
      (err, result, field) => {
        if (err) {
          callback(err);
        }
        return callback(null, result[0]);
      }
    );
  },

  find: (callback) => {
    Pool.query(
      `SELECT id, firstname, lastname, gender, email, password, number FROM registration`,
      [],
      (err, result, field) => {
        if (err) {
          callback(err);
        }
        return callback(null, result);
      }
    );
  },

  findByIdAndUpdate: (data, callback) => {
    Pool.query(
      `UPDATE registration SET firstname=?,lastname=?,gender=?,email=?,password=?,number=? WHERE id=?`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (err, result, field) => {
        if (err) {
          callback(err);
        }
        return callback(null, result);
      }
    );
  },

  findByIdAndDelete: (data, callback) => {
    Pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
