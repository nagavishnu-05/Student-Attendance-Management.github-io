import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./assets/Main.css";

const Main = () => {
  const [staff, setStaff] = useState("");
  const [semester, setSemester] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedStaff = localStorage.getItem("staffname") || "";
    const storedSemester = localStorage.getItem("semester") || "";
    const storedDate = localStorage.getItem("date") || "";
    const storedTime = localStorage.getItem("time") || "";

    setStaff(storedStaff);
    setSemester(storedSemester);
    setDate(storedDate);
    setTime(storedTime);

    if (storedStaff && storedSemester && storedDate && storedTime) {
      setMessage(
        `Welcome ${storedStaff}!...\nYou have Logged In Successfully !!`
      );
    }
  }, []);

  return (
    <div id="m-main">
      <div style={{ height: "143px" }}>
        <img id="m-vlogo" src="/VCET Logo.jpg" alt="VCET Logo Not Found" />
        <img id="m-clogo" src="/CSE LOGO.jpg" alt="CSE Logo Not Found" />
        <pre id="m-vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY{"\n"}
          AUTONOMOUS{"\n"}
          MADURAI
        </pre>
      </div>
      <hr id="m-li"/>
      <pre id="m-dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="m-class">CLASS : CSE - B</pre>
      <pre id="m-batch">BATCH : 2023 - 2027</pre>
      <hr
        style={{
          position: "relative",
          top: "-50px",
          border: "2px solid white",
          borderColor: "white",
        }}
      />

      <div id="m-display">
        <p>{message}</p>
      </div>

      <div id="m-side">
        <div className="m-sbar">
          <Link className="m-a" to="/student">Student Details</Link>
        </div>
        <br />
        <div className="m-sbar">
          <Link className="m-a" to="/attendance">Attendance</Link>
        </div>
        <br />
        <div className="m-sbar">
          <Link className="m-a" to="/absent">Absent Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
