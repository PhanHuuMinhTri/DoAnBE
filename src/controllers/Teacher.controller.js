const teacher = require("../models/teacher.model");

class TeacherController {
  getTeacher(req, res) {
    try {
      teacher.getTeacher((err, rows) => {
        if (!err) {
          const fixRow = rows.map((item) => ({
            idTeacher: item.idTeacher,
            name: item.name,
            phone: item.phone,
            avatar: item.avatar,
            description: item.descriptionTeacher,
            listCourse: [
              {
                idCourse: item.idCourse,
                nameCourse: item.nameCourse,
              },
            ],
          }));

          const listTeacher = fixRow.reduce((acc, item) => {
            const findIndex = acc.findIndex(
              (value) => value.idTeacher === item.idTeacher
            );

            if (findIndex < 0) {
              const list = [...acc, item];
              return list;
            } else {
              let list = [...acc];
              list[findIndex].listCourse.push(...item.listCourse);
              return list;
            }
          }, []);

          res.status(200).send(listTeacher);
        } else {
          res.status(500).json({ error: "error when get teacher from db" });
        }
      });
    } catch (error) {}
  }

  getListTeacher(req,res){
    try {
      teacher.getListTeacher((err, rows)=>{
        if(!err){
          res.status(200).send(rows)
        }
        else{
          res.status(500).json({ error: "error when get teacher from db" });
        }
      })
    } catch (error) {
      console.log('err', error)
    }
  }

  getTeacherInfo(req,res){
    const id = req.params.id
    try {
      teacher.getTeacherInfo(id, (err, rows)=>{
        if(!err){
          res.status(200).send(rows)
        }
        else{
          res.status(500).json({ error: "error when get teacher from db" });
        }
      })
    } catch (error) {
      console.log('err', error)
    }
  }

  addTeacher(req, res) {
    const data = req.body;
    try {
      teacher.addTeacher(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add teacher success");
        } else {
          res.status(500).json({ error: "error when set teacher from db" });
        }
      });
    } catch (error) {}
  }

  updateTeacher(req, res) {
    const data = req.body;
    try {
      teacher.updateTeacher(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update teacher success");
        } else {
          res.status(500).json({ error: "error when set teacher from db" });
        }
      });
    } catch (error) {}
  }

  deleteTeacher(req, res) {
    const id = req.params.id;
    try {
      teacher.deleteTeacher(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete teacher success");
        } else {
          res.status(500).json({ error: "error when delete teacher from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new TeacherController();
