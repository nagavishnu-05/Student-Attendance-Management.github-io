const { jsPDF } = window.jspdf;

function loadAttendanceData() {
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData'));
    const resultContainer = document.getElementById('absentDetails');

    if (!attendanceData || attendanceData.length === 0) {
        resultContainer.innerHTML = '<p>No students are marked as Absent, On Duty, or on Leave.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Status</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            ${attendanceData.map(student => `
                <tr>
                    <td>${student.rollNumber}</td>
                    <td>${student.name}</td>
                    <td>${student.status}</td>
                    <td>${student.reason || 'No reason provided'}</td>
                </tr>
            `).join('')}
        </tbody>
        `;
    resultContainer.appendChild(table);
}

function displayDateAndHour() {
    const storedDate = localStorage.getItem('date');
    const storedHour = localStorage.getItem('time');
    const storedStaffName = localStorage.getItem('staffname');

    document.getElementById('date').innerText = `DATE : ${storedDate || 'No date set'}`;
    document.getElementById('hr').innerText = `HOUR : ${storedHour || 'No hour set'}`;
    document.getElementById('staff').innerText = `STAFF NAME : ${storedStaffName || 'No staff name set'}`;
}

function downloadPDF() {
    const doc = new jsPDF();
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData'));

    if (!attendanceData || attendanceData.length === 0) {
        alert("No attendance data to save.");
        return;
    }

    doc.setFont("Times");

    const storedDate = localStorage.getItem('date');
    const storedHour = localStorage.getItem('time');
    const storedStaffName = localStorage.getItem('staffname');
    doc.text(`Attendance Report`, 10, 10);
    doc.text(`Date: ${storedDate || 'No date set'}`, 10, 20);
    doc.text(`Hour: ${storedHour || 'No hour set'}`, 10, 30);
    doc.text(`Staff Name: ${storedStaffName || 'No staff name set'}`, 10, 40);

    let yPos = 50;
    doc.text("Roll Number", 10, yPos);
    doc.text("Name", 50, yPos);
    doc.text("Status", 110, yPos);
    doc.text("Reason", 160, yPos);
    doc.line(10, yPos + 2, 200, yPos + 2);
    yPos += 10;

    attendanceData.forEach(student => {
        doc.text(student.rollNumber.toString(), 10, yPos);
        doc.text(student.name, 50, yPos);
        doc.text(student.status, 110, yPos);
        doc.text(student.reason || 'No reason provided', 160, yPos);
        yPos += 10;
    });

    yPos += 20;
    doc.text("Mentor 1", 10, yPos);
    doc.text("Mentor 2", 60, yPos);
    doc.text("Class Incharge", 110, yPos);
    doc.text("HOD CSE", 160, yPos);

    const pdfBlob = doc.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = pdfURL;
    downloadLink.download = `Attendance_Report_${storedDate || 'No_date'}.pdf`;
}



window.onload = function() {
    loadAttendanceData();
    displayDateAndHour();
};
