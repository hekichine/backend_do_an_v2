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
  // get all user
  router.get("/getall", userController.getAll);
  // find user
  router.get("/find/:id", userController.findId);
  // register
  router.post("/signup", userController.signup);
  //login
  router.post("/signin", userController.signin);
  //delete user
  router.delete("/delete/:id", userController.delete);
  //update user
  router.post("/update", upload.single("user_image"), userController.update);
  //update avt
  router.post(
    "/account/avatar",
    upload.single("user_image"),
    userController.updateAvt
  );
  // update cover image
  router.post(
    "/account/coverimage",
    upload.single("cover_image"),
    userController.updateCover
  );
  //  get comment by user
  router.get("/comment/:id", userController.getComment);
  // update 2
  router.post("/update2", userController.update2);

  app.use("/api/user", router);
};

export default initUserRoute;
