import connection from "../connectDB/connect";
import service from "../service/service";
const categoryController = {
  getAll: (req, res) => {
    let sql = "select * from categories";

    let message = "Get all category";
    connection.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      if (rows) {
        return res.status(200).json({
          message: message,
          error: 0,
          rows: rows,
        });
      }
    });
  },
  findId: (req, res) => {
    let id = req.params.id;
    let sql = "select * from categories where id =?";
    let message = "Find categorys by id";
    service.findId(res, connection, sql, id, message);
  },
  create: (req, res) => {
    let sql1 = "select * from categories  where category_name = ?";
    let sql2 = "insert into categories set ?";
    let category = req.body;
    let message = "Category ready exists";
    connection.query(sql1, [category?.category_name], (err, rows) => {
      if (!err) {
        if (rows?.length > 0) {
          return res.status(200).json({
            message: message,
            error: 1,
          });
        } else {
          connection.query(sql2, category, (err, rows) => {
            if (!err) {
              return res.status(200).json({
                message: "Create success",
                error: 0,
              });
            } else {
              return res.status(200).json({
                message: "Create faild",
                error: 1,
              });
            }
          });
        }
      } else {
        return res.status(200).json({
          message: "Server Error",
          error: 1,
        });
      }
    });
  },
  update: (req, res) => {
    let category = req.body;
    let sql = "update categories set ? where id =?";
    service.update(res, connection, sql, category);
  },
  delete: (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let sql = "delete from categories where id=?";
    service.delete(res, connection, sql, id);
  },
};
export default categoryController;
