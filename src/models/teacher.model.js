const db = require("../config/db");

class Teacher {
  getTeacher(callback) {
    db.query(
      `Select * from teacher join course on teacher.idTeacher = course.idTeacher`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getListTeacher(callback){
    db.query(`Select * from teacher`,(err,rows)=>{
      callback(err, rows)
    })
  }

  getTeacherInfo(id,callback){
    db.query(`Select * from teacher where idTeacher = ${id}`,
    (err, rows)=>{
       callback(err,rows)
    })
  }

  addTeacher(data, callback) {
    db.query(
      `INSERT INTO teacher ( name, phone, avatar, descriptionTeacher) VALUES ( '${data?.name}', '${data?.phone}', '${data.avatar}', '${data.descriptionTeacher}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  updateTeacher(data, callback) {
    db.query(
      `Update teacher set  name = '${data?.name}' , phone = '${data?.phone}', avatar= '${data.avatar}', descriptionTeacher= '${data.descriptionTeacher}'  where idTeacher ='${data.idTeacher}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  deleteTeacher(id, callback) {
    db.query(`DELETE FROM teacher WHERE idTeacher = '${id}'`, (err, rows) => {
      console.log("err", err);
      callback(err, rows);
    });
  }
}

module.exports = new Teacher();
