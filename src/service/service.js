let itemPerPages = 3;
let service = {
  getall: (res, sql, sql2, connection, page, limit, message) => {
    connection.query(sql, (err, rows) => {
      if (!err) {
        if (rows) {
          if (limit > 10) {
            limit = 10;
          } else if (limit <= 0) {
            limit = 3;
          }
          let numPages = Math.ceil(rows.length / limit);
          if (page > numPages) {
            page = numPages;
          } else if (page <= 0) {
            page = 1;
          }
          if (limit > 10) {
            limit = 10;
          } else if (limit <= 0) {
            limit = 3;
          }
          const start = (page - 1) * limit;
          connection.query(sql2 + `${start},${limit}`, (err, rows) => {
            if (err) {
              throw err;
            }
            return res.status(200).json({
              message: message,
              error: 0,
              pageCount: numPages,
              rows: rows,
            });
          });
        } else {
          return res.status(200).json({
            message: message,
            error: 1,
            rows: null,
          });
        }
      } else {
        return res.status(200).json({
          message: "Server Error",
          error: 1,
          rows: null,
        });
      }
    });
  },
  signup: (res, connection, sql1, sql2, search, data, message) => {
    // console.log(sql1 + " " + sql2 + " " + search + " " + data + " " + message);
    connection.query(sql1, [search], (err, rows) => {
      if (rows.length > 0) {
        return res.status(200).json({
          message: message,
          error: 1,
        });
      }
      connection.query(sql2, [data], (err, rows) => {
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
    });
  },
  signin: (res, connection, sql, data) => {
    connection.query(sql, [data.username, data.password], (err, rows) => {
      if (!err) {
        if (rows.length == 0) {
          return res.status(200).json({
            message: "Account does not exist",
            error: 1,
          });
        }
        return res.status(200).json({
          message: "Login success",
          error: 0,
          rows: rows,
        });
      }
      return res.status(200).json({
        message: "Server is shutdown",
        error: 1,
      });
    });
  },
  delete: (res, connection, sql, id) => {
    connection.query(sql, id, (err, rows) => {
      if (!err && rows.affectedRows > 0) {
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
  update: (res, connection, sql, data) => {
    connection.query(sql, [data, data.id], (err, rows) => {
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
    });
  },
  findId: (res, connection, sql, id, message) => {
    connection.query(sql, id, (err, rows) => {
      if (!err) {
        if (rows) {
          return res.status(200).json({
            message: message,
            error: 0,
            rows: rows,
          });
        }
        return res.status(200).json({
          message: "Not found",
          error: 1,
          rows: null,
        });
      }
      return res.status(200).json({
        message: "Server error",
        error: 1,
      });
    });
  },
  addProduct: (
    res,
    connection,
    sql1,
    sql2,
    search,
    data,
    listImg,
    sql3,
    message
  ) => {
    // console.log(sql1 + " " + sql2 + " " + search + " " + data + " " + message);
    connection.query(sql1, [search], (err, rows) => {
      if (rows.length > 0) {
        return res.status(200).json({
          message: message,
          error: 1,
        });
      } else {
        connection.query(sql2, [data], (err, rows) => {
          if (!err) {
            // return res.status(200).json({
            //   message: "Create new product successfully",
            //   error: 0,
            //   product: rows.insertId,
            // });
            let pr_id = rows.insertId;
            connection.query(
              sql3,
              [
                listImg.map((item) => {
                  return [pr_id, item.originalname];
                }),
              ],
              (err, rows) => {
                if (!err) {
                  return res.status(200).json({
                    message: "Create new product successfully",
                    error: 0,
                  });
                }
              }
            );
          } else {
            return res.status(200).json({
              message: "Server error",
              error: 1,
            });
          }
        });
      }
    });
  },
};
export default service;
