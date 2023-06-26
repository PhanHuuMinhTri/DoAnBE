const db = require("../config/db");

class Auth {
  login(data, callback) {
    db.query(
      `Select * from account join user on account.IdUser = user.IdUser WHERE Account = '${data?.values?.account}' AND Password =  '${data?.values?.password}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getProfile(id, callback) {
    db.query(`Select * from user where IdUser = '${id}'`, (err, rows) => {
      callback(err, rows);
    });
  }

  getUser(callback) {
    db.query(`Select * from user`, (err, rows) => {
      callback(err, rows);
    });
  }

  deleteUser(id, callback) {
    db.query(`DELETE FROM account WHERE IdUser = ${id}`, (err, rows) => {
      if (!err) {
        db.query(`DELETE FROM user WHERE IdUser = ${id}`, (err, rows) => {
          callback(err, rows);
        });
      } else {
        callback(true);
      }
    });
  }

  updateProfile({ id, data }, callback) {
    db.query(
      `UPDATE user SET Name = '${data.username}', EmailAddress='${data.email}', Phone = '${data.phone}', Avatar = '${data.avatar}'
       WHERE user.IdUser = ${id}`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  updatePassword({ id, data }, callback) {
    db.query(
      `UPDATE account SET Password = '${data}' WHERE account.IdAccount = ${id}`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  register(data, callback) {
    db.query(
      `Select * from account join user on account.IdUser = user.IdUser WHERE Account = '${data?.values?.account}' AND EmailAddress =  '${data?.values?.email}'`,
      (err, rows) => {
        if (rows.length > 0) {
          callback("Account is already singup!", []);
        } else {
          db.query(
            `INSERT INTO user ( Name, EmailAddress, Phone) VALUES ( '${data?.values?.name}', '${data?.values?.email}', ${data?.values?.phone})`,

            (err, rows) => {
              console.log("err", err);
              if (!err) {
                console.log("err", err);
                db.query(
                  `Select * from user where EmailAddress =  '${data?.values?.email}'`,
                  (err, rows) => {
                    if (!err) {
                      db.query(
                        `INSERT INTO account ( Account, Password, IdUser,Role) VALUES ('${data?.values?.account}', '${data?.values?.password}', '${rows[0].IdUser}', '0');`,
                        (err, rows) => {
                          if (!err) {
                            callback(false, rows);
                          } else {
                            callback("Sign up fail", rows);
                          }
                        }
                      );
                    } else {
                      callback("Sign up fail", rows);
                    }
                  }
                );
              } else {
                callback("Sign up fail", rows);
              }
            }
          );
        }
      }
    );
  }
}

module.exports = new Auth();
