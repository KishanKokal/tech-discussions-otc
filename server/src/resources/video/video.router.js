import { Router } from "express";
import { uploadVideo } from "./video.controllers.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./videos");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.mp4`);
  },
});

const upload = multer({ storage });
const router = Router();

router.route("/").post(upload.single("video"), uploadVideo);
export default router;
