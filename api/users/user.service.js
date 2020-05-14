const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into registration(first_name, last_name, gender, email, password, phone) 
                    values(?,?,?,?,?,?)`,
          [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.phone
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getAll: callBack => {
        pool.query(
          `select id,first_name,last_name,gender,email,phone from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getAllById: (id, callBack) => {
        pool.query(
          `select id,first_name,last_name,gender,email,phone from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
    updateById: (data, callBack) => {
        pool.query(
          `update registration set first_name=?, last_name=?, gender=?, email=?, password=?, phone=? where id = ?`,
          [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.phone,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    deleteById: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    login: (email, callBack) => {
      pool.query(
        `select * from registration where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
  },
}