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
    let sql = "select * from products where id =?";
    let message = "Find product by id";
    service.findId(res, connection, sql, id, message);
  },
  create: (req, res) => {
    let sql1 = "select * from products  where product_name = ?";
    let sql2 = "insert into products set ?";
    let sql3 = "insert into productimages(product_id,image_url) value ?";
    let search = req.body.product_name;
    let product = req.body;
    let message = "Product ready exists";
    let listImg = req.files;

    service.addProduct(
      res,
      connection,
      sql1,
      sql2,
      search,
      product,
      listImg,
      sql3,
      message
    );
  },
  update: (req, res) => {
    let product = req.body;
    let sql = "update products set ? where id =?";
    service.update(res, connection, sql, product);
  },
};
export default categoryController;
