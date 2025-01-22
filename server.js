import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from './routers/student.router.js';

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Student Schema
const StudentSchema = new mongoose.Schema({
  rollNumber: String,
  name: String,
  status: String,
  reason: String,
});

const Student = mongoose.model("Student", StudentSchema);

//Fetch Students from database
app.get("/api/students", (req, res) => {
  Student.find({})
    .then((students) => res.json(students))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Routes
app.post("/api/attendance", (req, res) => {
  const { rollNumber, name, status, reason } = req.body;

  const newStudent = new Student({
    rollNumber: String(rollNumber),
    name,
    status,
    reason,
  });

  newStudent
    .save()
    .then((student) => res.json(student))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.delete("/api/attendance/:rollNumber", (req, res) => {
  const { rollNumber } = req.params;
  const parsedRollNumber = String(rollNumber);

  Student.deleteOne({ $or: [{ rollNumber: parsedRollNumber }, { rollNumber }] })
    .then(() => res.json({ message: "Student record deleted successfully" }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/api/attendance", (req, res) => {
  Student.find({ status: { $in: ["absent", "onduty", "leave"] } })
    .then((students) => res.json(students))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.use("/api/student", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running`);
});
