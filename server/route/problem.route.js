import express from "express";
import {
  getPaginatedProblems,
  postProblem,
  getProblemById,
  updateProblem,
  submitcode,
  checkCustomTestCase,
  getUserProblemSubmissions,
} from "../controllers/problem.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").get(getPaginatedProblems);
router.route("/create").post(isAuthenticated, postProblem);
router.route("/customTestCase").post(checkCustomTestCase);
router.route("/:problemid").get(getProblemById);
router.route("/update/:id").put(isAuthenticated, updateProblem);
// router.route("/filterproblem").get(getFilterProblem);
// router.route("/:id/submit").post(submitProblem);

router.route("/:problemid/submitcode").post(isAuthenticated, submitcode);
router.route("/:problemId/submissions/:userId").get(getUserProblemSubmissions)

export default router;
