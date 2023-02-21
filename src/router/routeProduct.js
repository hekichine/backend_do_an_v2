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
  router.get("/find/:id", productController.findId);
  //create product
  router.post(
    "/add",
    upload.array("productImages", 4),
    productController.create
  );
  // get comment
  router.get("/comment/:id", productController.getComment);
  // add comment
  router.post("/comment/add", productController.addComment);
  //get all comment
  router.get("/comment", productController.allComment);
  // delete comment
  router.delete("/comment/delete/:id", productController.deleteComment);

  app.use("/api/product", router);
};

export default initProductRoute;
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
