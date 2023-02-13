import express from "express";
import productController from "../Controller/productController";
import upload from "../middleware/upload";
import connection from "../connectDB/connect";

const router = express.Router();

const initProductRoute = (app) => {
  router.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "api product book store ",
    });
  });
  // get all product
  router.get("/getall", productController.getAll);
  // find by id
  router.get("/findId/:id", productController.findId);
  //create product
  router.post(
    "/add",
    upload.array("productImages", 4),
    productController.create
  );

  // upload multi multer
  // router.post("/multi", upload.array("image_product", 4), (req, res) => {
  //   let data = req.files;
  //   let id = 5;
  //   connection.query(
  //     "insert into test(pr_id,img_url) value ?",
  //     [
  //       data.map((item) => {
  //         return [id, item.originalname];
  //       }),
  //     ],
  //     (err, rows) => {
  //       if (!err) {
  //         if (rows) {
  //           return res.status(200).json({
  //             success: "oke",
  //           });
  //         }
  //       }
  //       return res.status(200).json({
  //         err,
  //       });
  //     }
  //   );
  // });

  app.use("/api/product", router);
};

export default initProductRoute;
