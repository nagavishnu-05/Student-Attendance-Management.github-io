import "./assets/student.css"; 

const Student = () => {
  return (
    <div id="stu-main">
      <div style={{ height: "143px" }}>
        <img id="stu-vlogo" src="/VCET Logo.jpg" alt="Image Not Found" />
        <img id="stu-clogo" src="/CSE LOGO.jpg" alt="Image Not Found" />
        <pre id="stu-vcet">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY{"\n"}
          AUTONOMOUS{"\n"}
          MADURAI
        </pre>
      </div>
      <hr id="stu-hr"/>

      <pre id="stu-dept">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</pre>
      <pre id="stu-class">CLASS : CSE - B</pre>
      <pre id="stu-batch">BATCH : 2023 - 2027</pre>
      <hr
        style={{
          position: "relative",
          top: "-50px",
          border: "2px solid white",
          borderColor: "white",
        }}
      />

      <h1 id="stu-student">STUDENT DETAILS</h1>

      <div>
        <table id="stu-table" border="1">
          <thead>
            <tr>
              <th rowSpan="2" class="stu-th">RELIGION</th>
              <th colSpan="5" class="stu-th">BOYS</th>
              <th colSpan="5" class="stu-th">GIRLS</th>
            </tr>
            <tr>
              <th class="stu-th">BC</th>
              <th class="stu-th">OBC</th>
              <th class="stu-th">MBC</th>
              <th class="stu-th">SC/ST</th>
              <th class="stu-th">Tot</th>
              <th class="stu-th">BC</th>
              <th class="stu-th">OBC</th>
              <th class="stu-th">MBC</th>
              <th class="stu-th">SC/ST</th>
              <th class="stu-th">Tot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="stu-td">HINDU</td>
              <td class="stu-td">27</td>
              <td class="stu-td">-</td>
              <td class="stu-td">5</td>
              <td class="stu-td">2</td>
              <td class="stu-td">33</td>
              <td class="stu-td">22</td>
              <td class="stu-td">-</td>
              <td class="stu-td">3</td>
              <td class="stu-td">4</td>
              <td class="stu-td">28</td>
            </tr>
            <tr>
              <td class="stu-td">MUSLIM</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
            </tr>
            <tr>
              <td class="stu-td">CHRISTIAN</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">1</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
              <td class="stu-td">-</td>
            </tr>
          </tbody>
        </table>

        <h2 class="m-h2">TOTAL NO. OF BOYS : 35</h2>
        <h2 class="m-h2">TOTAL NO. OF GIRLS : 29</h2>
        <h2 class="m-h2">TOTAL NO. OF STUDENTS : 64</h2>
      </div>
      <a id="m-anc" href="/II CSE B.pdf" download="II CSE B.pdf">
        Student List
      </a>
    </div>
  );
};

export default Student;
