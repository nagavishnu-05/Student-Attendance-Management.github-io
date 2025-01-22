import express from "express";
import { fetchAbsentStudents, fetchStudentDetail, setStatusAbsent } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/fetchStudentDetail", fetchStudentDetail);
router.put("/setStatusAbsent/:rollNo", setStatusAbsent);
router.get("/fetchAbsentStudents", fetchAbsentStudents);

export default router;