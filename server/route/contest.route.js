import express from "express";
import {
  contestProblemSubmitCode,
  createContest,
  getAllcontests,
  getContestById,
  getContestProblem,
  getContestProblemById,
  registerForContest,
} from "../controllers/contest.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";

// Export a function that accepts `io` and returns the router
export const contestRoutes = (io) => {
  const router = express.Router();

  // Define routes
  router.route("/").get(getAllcontests);
  router.route("/:id").get(getContestById);
  router.route("/create").post((req, res) => createContest(req, res, io)); // Pass `io` to createContest
  router.route("/update/:id").put();


  router.route("/:problemid/submitcode").post(isAuthenticated, contestProblemSubmitCode);
  router.route("/register/:contestId/:userId").get(isAuthenticated, registerForContest);
  router.route("/:contestId/problems/:problemId").get( getContestProblemById);

  router.route("/:contestId/problems").get(getContestProblem);


  return router;
};
