import connection from "../connectDB/connect";
import service from "../service/service";
const productController = {
  getAll: (req, res) => {
    let sql = "select * from products";

    let message = "Get all product";
    service.getall(res, sql, connection, message);
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
    let search = req.body.product_name;
    let product = req.body;
    let message = "Product ready exists";
    service.signup(res, connection, sql1, sql2, search, product, message);
  },
  update: (req, res) => {
    let product = req.body;

    let sql = "update products set ? where id =?";
    service.update(res, connection, sql, product);
  },
};
export default productController;
