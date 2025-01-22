import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Student from "./Student";
import Attendance from "./Attendance";
import Absent from "./Absent";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/student" element={<Student />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/absent" element={<Absent />} />
    </Routes>
  );
};

export default App;
