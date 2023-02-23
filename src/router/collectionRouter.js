import express from "express";
import collectionController from "../Controller/collectionController";
import upload from "../middleware/upload";

const router = express.Router();

const initCollectionRouter = (app) => {
  router.get("/getall", collectionController.getall);
  //create
  router.post(
    "/add",
    upload.single("collection_image"),
    collectionController.create
  );
  // get product in collection
  router.get("/productlist/:id", collectionController.getproduct);

  app.use("/api/collection", router);
};

export default initCollectionRouter;
