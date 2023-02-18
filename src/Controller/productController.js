import connection from "../connectDB/connect";
import service from "../service/service";
const productController = {
  getAll: (req, res) => {
    let sql = "select * from products";
    let sql2 = "select * from products limit ";

    let message = "Get all product";

    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = req.query.limit ? Number(req.query.limit) : 5;

    service.getall(res, sql, sql2, connection, page, limit, message);
  },
  findId: (req, res) => {
    let id = req.params.id;
    let sql = "select * from products where id =?";
    let sql2 = "select * from productimages where product_id = ?";
    let message = "Find product by id";
    service.findProduct(res, connection, sql, sql2, id, message);
  },
  create: (req, res) => {
    let sql1 = "select * from products  where product_name = ?";
    let sql2 = "insert into products set ?";
    let sql3 = "insert into productimages(product_id,image_url) value ?";
    let search = req.body.product_name;
    let product = req.body;
    product.product_image = req.files[0].originalname;
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
export default productController;
