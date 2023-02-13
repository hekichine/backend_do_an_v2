import express from "express";
import userController from "../Controller/userController";
import upload from "../middleware/upload";

const router = express.Router();

const initUserRoute = (app) => {
  router.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "api book store",
    });
  });
  router.get("/getall", userController.getAll);
  // register
  router.post("/signup", userController.signup);
  //login
  router.post("/signin", userController.signin);
  //delete user
  router.delete("/delete/:id", userController.delete);
  //update user
  router.post("/update", upload.single("user_avt"), userController.update);

  app.use("/api/user", router);
};

export default initUserRoute;
