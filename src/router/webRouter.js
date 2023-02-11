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
      getOder: "api/order/",
      findOrder: "api/order/:id  ! id user",
      update: "api/order/update",
      delete: "api/order/delete/:id ! Not recommend",
      add: "api/order/add",
      k: "=====================COMMENT===================",
      getall: "api/comment/getall",
      delete: "api/comment/delete/:id",
      j: "================COLLECTION==================",
      getall: "api/collection/getall",
      findId: "api/collection/:id",
      add: "api/collection/add",
      update: "api/collection/update",
      delete: "api/collection/delete/:id",
      h: "====================COLLECTION DETAIL=============",
      add: "api/collectiondetail/add",
      getall: "api/collectiondetail/getall",
      delete: "api/collectiondetail/delete/:id",
      findId: "api/collectiondetail/:id",
      update: "",
    });
  });
  app.use("/", router);
};
export default initWebRouter;
