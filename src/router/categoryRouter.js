import express from "express";
import categoryController from "../Controller/categoryController";

const router = express.Router();

const initCategoryRouter = (app) => {
  router.get("/getall", categoryController.getAll);
  // add category
  router.post("/add", categoryController.create);
  //update category
  router.post("/update", categoryController.update);
  //delete
  router.delete("/delete/:id", categoryController.delete);

  app.use("/api/categories", router);
};

export default initCategoryRouter;
