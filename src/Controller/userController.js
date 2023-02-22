import connection from "../connectDB/connect";
import service from "../service/service";

const userController = {
  signup: (req, res) => {
    let user = req.body;
    let sql1 = "select * from users where username =?";
    let sql2 = "insert into users set ?";
    let search = req.body.username;
    let message = "Account exists";
    service.signup(res, connection, sql1, sql2, search, user, message);
  },

  getAll: (req, res) => {
    let sql = "select * from users";
    let message = "get all users";
    let sql2 = "select * from users limit ";
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = req.query.limit ? Number(req.query.limit) : 5;
    service.getall(res, sql, sql2, connection, page, limit, message);
  },
  signin: (req, res) => {
    let user = req.body;
    let sql = "select * from users where username =? and password =?";
    service.signin(res, connection, sql, user);
  },
  delete: (req, res) => {
    let id = req.params.id;
    let sql = "delete from users where id =?";
    service.delete(res, connection, sql, id);
  },
  update: (req, res) => {
    let user = req.body;
    if (req?.file && req?.file?.originalname) {
      user.user_image = req?.file?.originalname;
    }
    let sql = "update users set ? where id =?";
    service.update(res, connection, sql, user);
  },
  findId: (req, res) => {
    let { id } = req.params;
    // console.log(id);
    if (!id) {
      return res.status(200).json({
        message: "ID invalid",
        error: 1,
      });
    } else {
      let sql = "select * from users where id=?";
      let message = "find user";
      service.findId(res, connection, sql, id, message);
    }
  },
  updateAvt: (req, res) => {
    let { uid } = req.body;
    let user_image = req?.file?.originalname;
    if (!user_image) {
      return res.status(200).json({
        message: "Avatar image null",
        error: 1,
      });
    } else {
      let sql = "update users set user_image =? where id =? ";
      connection.query(sql, [user_image, uid], (err, rows) => {
        if (!err) {
          return res.status(200).json({
            message: "Update success",
            error: 0,
          });
        } else {
          return res.status(200).json({
            message: "Update error",
            error: 1,
          });
        }
      });
    }
  },
  updateCover: (req, res) => {
    let { uid } = req.body;
    let cover_image = req?.file?.originalname;
    if (!cover_image) {
      return res.status(200).json({
        message: "Cover image null",
        error: 1,
      });
    } else {
      let sql = "update users set cover_image =? where id =? ";
      connection.query(sql, [cover_image, uid], (err, rows) => {
        if (!err) {
          return res.status(200).json({
            message: "Update success",
            error: 0,
          });
        } else {
          return res.status(200).json({
            message: "Update error",
            error: 1,
          });
        }
      });
    }
  },
  getComment: (req, res) => {
    let { id } = req.params;
    if (!id) {
      return res.status(200).json({
        message: "Id invalid",
        error: 1,
      });
    }
    let sql =
      "select pr.product_name,pr.product_image,cmt.product_id,cmt.content,cmt.timestamp,user.user_image, user.fullname from products as pr , comments as cmt , users as user where cmt.product_id = pr.id and cmt.user_id = user.id and cmt.user_id =?";

    connection.query(sql, id, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Get comment by user",
          user_id: id,
          comments: rows,
          error: 0,
        });
      } else {
        return res.status(200).json({
          message: "Server error",
          error: 1,
        });
      }
    });
  },
  update2: (req, res) => {
    let userupdate = req.body;
    let sql = "update users set ? where id =?";
    connection.query(sql, [userupdate, userupdate.id], (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Update success",
          error: 0,
        });
      }
      return res.status(200).json({
        message: "Server error",
        error: 1,
      });
    });
  },
};

export default userController;
