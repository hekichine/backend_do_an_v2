import connection from "../connectDB/connect";

let collectionController = {
  getall: (req, res) => {
    let sql = "select * from collections ";
    connection.query(sql, (err, rows) => {
      if (!err) {
        return res.status(200).json({
          message: "All collection",
          error: 0,
          collections: rows,
          count: rows.length,
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
    let sql =
      "insert into collections(collection_name,collection_image) value ?";
    let sql2 = "insert into collectiondetail(collection_id,product_id) value ?";
    let collection = {
      collection_name: req.body?.collection_name,
      collection_image: req.body?.collection_image,
    };
    collection.collection_image = req?.file?.originalname;
    let listpr = req.body?.collection_detail;

    console.log(collection);
    return;
    // console.log(collection?.collection_name, collection?.collection_image);
    connection.query(sql, [collection], (err, rows) => {
      console.log(err);
      if (!err) {
        let id = rows.insertID;
        connection.query(
          sql2,
          [
            listpr?.map((item) => {
              return [id, item?.id];
            }),
          ],
          (err, rows) => {
            if (!err) {
              return res.status(200).json({
                message: "Add success",
                error: 0,
              });
            } else {
              return res.status(200).json({
                message: "Add failed",
                error: 1,
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
  },
  getproduct: (req, res) => {
    let { id } = req.params;
    let sql = `select pr.product_name, cdt.id,cdt.product_id,cl.collection_name,cl.collection_image 
    from products as pr,collectiondetail as cdt, collections as cl
    where cdt.product_id = pr.id and cdt.collection_id = cl.id and cl.id =?`;
    if (id) {
      connection.query(sql, id, (err, rows) => {
        if (!err) {
          return res.status(200).json({
            message: "List product in collection",
            collection_detail: rows,
            error: 0,
          });
        } else {
          return res.status(200).json({
            message: "Server error",
            error: 1,
          });
        }
      });
    } else {
      return res.status(200).json({
        message: "ID invalid",
        error: 1,
      });
    }
  },
};
export default collectionController;
