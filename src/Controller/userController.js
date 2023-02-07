import connection from "../connectDB/connect";
const userController = {
  register: (req, res) => {
    let user = req.body;

    connection.query(
      "select * from user where username =?",
      [user.username],
      (err, rows) => {
        if (rows.length > 0) {
          return res.status(200).json({
            message: "Account exist",
            error: 1,
          });
        }
        connection.query("insert into user set ?", [user], (err, rows) => {
          if (!err) {
            return res.status(200).json({
              message: "Create successfully",
              error: 0,
            });
          }
          return res.status(200).json({
            message: "Server error",
            error: 1,
          });
        });
      }
    );
  },

  getAll: (req, res) => {
    connection.query("select * from user", (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "all user",
          error: 0,
          list_user: rows,
        });
      }
      return res.status(200).json({
        message: "Server error",
        error: 1,
      });
    });
  },
  login: (req, res) => {
    let user = req.body;
    connection.query(
      "select * from user where username =? and password =?",
      [user.username, user.password],
      (err, rows) => {
        if (rows.length == 0) {
          return res.status(200).json({
            message: "Account does not exist",
            error: 1,
          });
        }
        return res.status(200).json({
          message: "Login success",
          error: 0,
          user_info: rows,
        });
      }
    );
  },
  delete: (req, res) => {
    let id = req.params.id;
    connection.query("delete from user where id =?", [id], (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Delete success",
          error: 0,
        });
      }
      return res.status(200).json({
        message: "Delete error",
        error: 1,
      });
    });
  },
  update: (req, res) => {
    let user = req.body;
    connection.query(
      "update user set ? where id =?",
      [user, user.id],
      (err, rows) => {
        if (!err) {
          return res.status(200).json({
            message: "Update success",
            error: 0,
          });
        }
        return res.status(200).json({
          message: "Update failed",
          error: 1,
        });
      }
    );
  },
};

export default userController;
