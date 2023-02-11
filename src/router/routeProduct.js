import express from "express";
import productController from "../Controller/productController";

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
  router.post("/add", productController.create);

  app.use("/api/product", router);
};

export default initProductRoute;
