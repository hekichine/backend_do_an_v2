import express from "express";
import userController from "../Controller/userController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "api book store",
    });
  });
  router.get("/getalluser", userController.getAll);
  // register
  router.post("/register", userController.register);
  //login
  router.post("/login", userController.login);
  //delete user
  router.post("/delete/:id", userController.delete);
  //update user
  router.post("/update", userController.update);

  app.use("/api/user", router);
};

export default initWebRoute;
