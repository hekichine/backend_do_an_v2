import express from "express";
const router = express.Router();
const initWebRouter = (app) => {
  router.get("/", (req, res) => {
    res.status(200).json({
      message: "Api Book Store are ready!",
      dev: "Luu chien",
      publisher: "Luu Chien",
      DatePublic: "10/02/2023",
      end: "Congratulate",
      docs: "/docs",
    });
  });
  router.get("/docs", (req, res) => {
    res.status(200).json({
      message: "Docs api book store",
      x: "=================USER==================",
      getUser: "api/user/getall",
      addUser: "api/user/signup",
      deleteUser: "api/user/delete/:id",
      updateUSer: "api/user/update",
      y: "==================PRODUCT================",
      getall: "api/product/getall",
      findId: "api/product/:id",
      update: "api/product/update",
      delete: "api/product/delete/:id ! Not recommend",
      add: "api/product/add",
      z: "====================ORDERS=====================",
      getOder4: "api/order/",
      findOrder4: "api/order/:id  ! id user",
      update4: "api/order/update",
      delete4: "api/order/delete/:id ! Not recommend",
      add4: "api/order/add",
      k: "=====================COMMENT===================",
      getall21: "api/comment/getall",
      delete1: "api/comment/delete/:id",
      j: "================COLLECTION==================",
      getall2: "api/collection/getall",
      findId2: "api/collection/:id",
      add2: "api/collection/add",
      update2: "api/collection/update",
      delete2: "api/collection/delete/:id",
      h: "====================COLLECTION DETAIL=============",
      add3: "api/collectiondetail/add",
      getall3: "api/collectiondetail/getall",
      delete3: "api/collectiondetail/delete/:id",
      findId3: "api/collectiondetail/:id",
      update3: "api/collectiondetail/update",
    });
  });
  app.use("/", router);
};
export default initWebRouter;
