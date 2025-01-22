import student from "../models/student.modal.js";
import dotenv from "dotenv";

dotenv.config();

export const fetchStudentDetail = async (req, res) => {
    try {
        const students = await student.find();
        if (!students || students.length === 0) {
            return res.status(400).json({ message: "No Student found!" });
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error fetching Students", error });
    }
};

export const setStatusAbsent = async(req, res) => {
    try {
        const { rollNo } = req.params;
        const updatedStudent = await student.findOneAndUpdate(
            { rollNo: rollNo },
            { $set: { status: "Absent" } },
            { new: true, runValidators: true }
        );
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student Not found!" });
        }
        res.status(200).json({ message: "Student marked absent", student: updatedStudent });
    } catch (error) {
        console.error("Error updating student status: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const fetchAbsentStudents = async (req, res) => {
    try {
        const students = await student.find({ status: "Absent" });
        if (!students || students.length === 0) {
            return res.status(400).json({ message: "No Absentees yet!" });
        }
        res.status(200).json(students);
    } catch (error) {
        console.error("Error fetching Students: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};