import express from "express";
import categoryController from "../Controller/categoryController";

const router = express.Router();

const initCategoryRouter = (app) => {
  router.get("/getall", categoryController.getAll);

  app.use("/api/categories", router);
};

export default initCategoryRouter;
