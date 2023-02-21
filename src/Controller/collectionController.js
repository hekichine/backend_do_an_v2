import connection from "../connectDB/connect";
import service from "../service/service";

let collectionController = {
  getall: (req, res) => {
    let sql = "select * from collections ";
    connection.query(sql, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "All collection",
          error: 0,
          collections: rows,
        });
      } else {
        return res.status(200).json({
          message: "Server error",
          error: 1,
        });
      }
    });
  },
  create: (req, res) => {
    let sql = "insert into collections set?";
    let collection = req.body;
    collection.collection_image = req?.file?.originalname;

    connection.query(sql, collection, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "Add success",
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
};
export default collectionController;
