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
    if (req.file && req.file.originalname) {
      user.user_image = req?.file?.originalname;
    }
    let sql = "update users set ? where id =?";
    service.update(res, connection, sql, user);
  },
  findId: (req, res) => {
    let { id } = req.params;
    console.log(id);
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
};

export default userController;
