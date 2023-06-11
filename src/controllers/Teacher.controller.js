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
}

module.exports = new TeacherController();
