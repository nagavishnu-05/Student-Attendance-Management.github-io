import { useState, useEffect } from "react";
import "./assets/attendance.css";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    setDate(localStorage.getItem("date") || "Not Selected");
    setHour(localStorage.getItem("time") || "Not Selected");

    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const disableReason = (id) => {
    const textarea = document.getElementById(`reason${id}`);
    textarea.disabled = true;
    textarea.value = "";
  };

  const enableReason = (id) => {
    const textarea = document.getElementById(`reason${id}`);
    textarea.disabled = false;
  };

  const handleSubmit = () => {
    const collectedData = students.map((student, index) => {
      const attendanceStatus = document.querySelector(
        `input[name="attendance${index + 1}"]:checked`
      )?.value;

      const reason = document.getElementById(`reason${index + 1}`).value;

      return {
        rollNumber: student.rollNumber,
        name: student.name,
        status: attendanceStatus || "Not Marked",
        reason: attendanceStatus === "present" ? "" : reason,
      };
    });

    setAttendanceData(collectedData);

    localStorage.setItem("attendanceData", JSON.stringify(collectedData));
    alert("Attendance submitted!");
  };

  return (
    <div id="att-main">
      <div id="att-header">
        <img id="att-vlogo" src="VCET Logo.jpg" alt="Image Not Found" />
        <img id="att-clogo" src="CSE LOGO.jpg" alt="Image Not Found" />
        <pre id="att-vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY{"\n"}
          AUTONOMOUS{"\n"}
          MADURAI
        </pre>
      </div>

      <hr/>
      <h1 id="att-h1">ENTER ATTENDANCE</h1>

      <h3 id="att-h3">
        DATE: <span id="dateDisplay">{date}</span>
      </h3>
      <h3 id="att-hr">
        HOUR: <span id="hourDisplay">{hour}</span>
      </h3>

      <button id="button" onClick={handleSubmit}>
        Submit
      </button>

      <table id="att-table">
        <thead>
          <tr>
            <th className="att-th">Roll Num</th>
            <th className="att-th">Name</th>
            <th className="att-th">Present</th>
            <th className="att-th">Absent</th>
            <th className="att-th">Leave</th>
            <th className="att-th">On Duty</th>
            <th className="att-th">Reason</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.rollNumber}>
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="radio"
                  name={`attendance${index + 1}`}
                  value="present"
                  onClick={() => disableReason(index + 1)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`attendance${index + 1}`}
                  value="absent"
                  onClick={() => enableReason(index + 1)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`attendance${index + 1}`}
                  value="leave"
                  onClick={() => enableReason(index + 1)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`attendance${index + 1}`}
                  value="onduty"
                  onClick={() => enableReason(index + 1)}
                />
              </td>
              <td>
                <textarea id={`reason${index + 1}`} disabled />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
