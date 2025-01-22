import "./assets/absent.css";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

const Absent = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [staffName, setStaffName] = useState("");

  useEffect(() => {
    const storedAttendance =
      JSON.parse(localStorage.getItem("attendanceData")) || [];
    const storedDate = localStorage.getItem("date") || "No date set";
    const storedHour = localStorage.getItem("time") || "No hour set";
    const storedStaffName =
      localStorage.getItem("staffname") || "No staff name set";

    setAttendanceData(storedAttendance);
    setDate(storedDate);
    setHour(storedHour);
    setStaffName(storedStaffName);
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();

    if (attendanceData.length === 0) {
      alert("No attendance data to save.");
      return;
    }

    doc.setFont("Times");
    doc.text("Attendance Report", 10, 10);
    doc.text(`Date: ${date}`, 10, 20);
    doc.text(`Hour: ${hour}`, 10, 30);
    doc.text(`Staff Name: ${staffName}`, 10, 40);

    let yPos = 50;
    doc.text("Roll Number", 10, yPos);
    doc.text("Name", 50, yPos);
    doc.text("Status", 110, yPos);
    doc.text("Reason", 160, yPos);
    doc.line(10, yPos + 2, 200, yPos + 2);
    yPos += 10;

    attendanceData.forEach((student) => {
      doc.text(student.rollNumber.toString(), 10, yPos);
      doc.text(student.name, 50, yPos);
      doc.text(student.status, 110, yPos);
      doc.text(student.reason || "No reason provided", 160, yPos);
      yPos += 10;
    });

    yPos += 20;
    doc.text("Mentor 1", 10, yPos);
    doc.text("Mentor 2", 60, yPos);
    doc.text("Class Incharge", 110, yPos);
    doc.text("HOD CSE", 160, yPos);

    doc.save(`Attendance_Report_${date}.pdf`);
  };

  return (
    <div id="absent">
      <div style={{ height: "143px" }}>
        <img id="ab-vlogo" src="VCET Logo.jpg" alt="Image Not Found" />
        <img id="ab-clogo" src="CSE LOGO.jpg" alt="Image Not Found" />
        <pre id="ab-vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY<br></br> AUTONOMOUS<br></br> MADURAI
        </pre>
      </div>
      <hr id="ab-li"/>

      <pre id="ab-dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="ab-class">CLASS : CSE - B</pre>
      <pre id="ab-batch">BATCH : 2023 - 2027</pre>
      <hr
        style={{
          position: "relative",
          top: "-50px",
          border: "2px solid white",
        }}
      />

      <h1 id="ab">ABSENT DETAILS</h1>
      <h2 id="ab-date">DATE : {date}</h2>
      <h2 id="ab-hr">HOUR : {hour}</h2>
      <h2 id="ab-staff">STAFF NAME : {staffName}</h2>
      <hr
        style={{
          position: "relative",
          top: "-180px",
          border: "2px solid white",
        }}
      />

      <div id="absentDetails">
        {attendanceData.length === 0 ? (
          <p>No students are marked as Absent, On Duty, or on Leave.</p>
        ) : (
          <table  id="ab-table">
            <thead>
              <tr class="ab-tr">
                <th class="ab-th">Roll Number</th>
                <th class="ab-th">Name</th>
                <th class="ab-th">Status</th>
                <th class="ab-th">Reason</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((student, index) => (
                <tr class="ab-tr" key={index}>
                  <td class="ab-td">{student.rollNumber}</td>
                  <td class="ab-td">{student.name}</td>
                  <td class="ab-td">{student.status}</td>
                  <td class="ab-td">{student.reason || "No reason provided"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <a id="ab-a" onClick={downloadPDF} style={{ cursor: "pointer" }}>
        Download Attendance Details as PDF
      </a>
    </div>
  );
};

export default Absent;
