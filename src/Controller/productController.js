import connection from "../connectDB/connect";
const productController = {
  getSingleProduct: (req, res) => {
    let id = req.params;

    connection.query("select * from product where id =?", [id], (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Single product",
          error: 0,
          product_detail: rows,
        });
      }
      return res.status(200).json({
        message: "Server error",
        error: 1,
      });
    });
  },
  getAll: (req, res) => {
    connection.query("select * from product", (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Get all product",
          error: 0,
          product_list: rows,
        });
      }
      return res.status(200).json({
        message: "Server error",
        error: 1,
      });
    });
  },
};
export default productController;
