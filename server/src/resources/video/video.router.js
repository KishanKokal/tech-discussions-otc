import { Router } from "express";
import { uploadVideo } from "./video.controllers.js";
const router = Router();

router.route("/").post(uploadVideo);
export default router;
