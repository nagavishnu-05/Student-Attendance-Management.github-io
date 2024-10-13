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

window.onload = function() {
    loadAttendanceData();
    displayDateAndHour();
};