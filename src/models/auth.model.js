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
