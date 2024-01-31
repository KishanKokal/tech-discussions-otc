import { Router } from "express";
import {
  getSummary,
  deleteSummary,
  updateSummary,
} from "./summary.controllers.js";

const router = Router();

router.route("/").get(getSummary).delete(deleteSummary).put(updateSummary);

export default router;
