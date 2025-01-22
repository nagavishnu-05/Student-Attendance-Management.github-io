import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "present",
    },
    reason: {
        type: String,
        default: "",
    }
});

const student = mongoose.model("student", studentSchema);

export default student;