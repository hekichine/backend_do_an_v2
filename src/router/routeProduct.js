import express from "express";
import connection from "../connectDB/connect";
import productController from "../Controller/productController";

const router = express.Router();

const initProductRoute = (app) => {
  router.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "api product book store ",
    });
  });
  //product detail
  router.get("/getSingleProduct/:id", productController.getSingleProduct);
  //get all product
  router.get("/getall", productController.getAll);

  app.use("/api/product", router);
};

export default initProductRoute;
