import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/Home.css";

const Home = () => {
  const [semester, setSemester] = useState("");
  const [staffOptions, setStaffOptions] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const staffData = {
    "I Semester": [
      "Ms. Lakshmi Priya",
      "Ms. V. Praveena",
      "Mr. R. Sathish Kumar",
      "Dr. B.K. Balachandhar",
      "Mr. M. Muralishankar",
      "Mr. G. Balamuralikrishnan",
    ],
    "II Semester": [
      "Mr. Sivam",
      "Ms. S. Benita",
      "Dr. M. Sornavalli",
      "Dr. D. Madhan",
      "Mr. M. Muralishankar",
      "Mr. G. Balamuralikrishnan",
      "Mrs. V. Umayal Muthu",
      "Mr. M. Karuppaiah Rajkumar",
    ],
    "III Semester": [
      "Mr. R. Sathish Kumar",
      "Mrs. A. Benazir Begum",
      "Mrs. D. Jansi Rani",
      "Dr. S. Senthil Kumar",
      "Mr. G. Balamuralikrishnan",
    ],
  };

  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSemester(selectedSemester);
    setStaffOptions(staffData[selectedSemester] || []);
  };

  const handleSubmit = () => {
    if (semester && selectedStaff && date && time) {
      localStorage.setItem("staffname", selectedStaff);
      localStorage.setItem("semester", semester);
      localStorage.setItem("date", date);
      localStorage.setItem("time", time);

      navigate("/main");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div id="h-main">
      <div style={{ height: "143px" }}>
        <img id="h-vlogo" src="/VCET Logo.jpg" alt="Image Not Found" />
        <img id="h-clogo" src="/CSE LOGO.jpg" alt="Image Not Found" />
        <pre id="h-vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY<br></br> 
AUTONOMOUS <br></br> MADURAI
        </pre>
      </div>
      <hr id="h-li" />
      <pre id="h-dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="h-class">CLASS : CSE - B</pre>
      <pre id="h-batch">BATCH : 2023 - 2027</pre>
      <h1 id="h-std">STUDENTS ATTENDANCE MANAGEMENT</h1>
      <div id="h-input">
        <label id="sem" htmlFor="semester1">
          Semester:
        </label>
        <select id="h-semester" value={semester} onChange={handleSemesterChange}>
          <option>Select Semester</option>
          <option value="I Semester">I Semester</option>
          <option value="II Semester">II Semester</option>
          <option value="III Semester">III Semester</option>
        </select>
        <br />
        <br />
        <label id="stf" htmlFor="h-staff">
          Staff Name:
        </label>
        <select
          id="h-staff"
          value={selectedStaff}
          onChange={(e) => setSelectedStaff(e.target.value)}
        >
          <option>Select Staff Name</option>
          {staffOptions.map((staff, index) => (
            <option key={index} value={staff}>
              {staff}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label id="dt" htmlFor="h-date">
          Date:
        </label>
        <input
          id="h-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <label id="period" htmlFor="h-time">
          Period:
        </label>
        <select
          id="h-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Period</option>
          <option value="I (9.00 - 9.50)">I (9.00 - 9.50)</option>
          <option value="II (9.50 - 10.40)">II (9.50 - 10.40)</option>
          <option value="III (11.00 - 11.50)">III (11.00 - 11.50)</option>
          <option value="IV (11.50 - 12.40)">IV (11.50 - 12.40)</option>
          <option value="V (1.20 - 2.10)">V (1.20 - 2.10)</option>
          <option value="VI (2.10 - 3.00)">VI (2.10 - 3.00)</option>
          <option value="VII (3.20 - 4.10)">VII (3.20 - 4.10)</option>
        </select>
      </div>
      <button id="h-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
