import express from "express";
import userController from "../Controller/userController";
import upload from "../middleware/upload";
import connection from "../connectDB/connect";

const router = express.Router();

const initUserRoute = (app) => {
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
  router.delete("/delete/:id", userController.delete);
  //update user
  router.post("/update", upload.single("user_avt"), userController.update);

  // test upload image
  router.post("/img", upload.single("image"), (req, res) => {
    let img = req.body;
    console.log(req.file);
    connection.query(
      "insert into imageproduct set ?",
      [img.image],
      (err, rows) => {
        if (!err) {
          return res.status(200).json({
            message: "ok",
          });
        }
        return res.status(200).json({
          message: "err",
          err,
        });
      }
    );
  });
  app.use("/api/user", router);
};

export default initUserRoute;
