function disableReason(id) {
    document.getElementById(`reason${id}`).disabled = true;
    document.getElementById(`reason${id}`).value = "";
}

function enableReason(id) {
    document.getElementById(`reason${id}`).disabled = false;
}

function storeAttendance() {
    let attendanceData = [];
    let allSelected = true;

    for (let i = 1; i <= 64; i++) {
        let Radio = document.querySelector(`input[name="attendance${i}"]:checked`);
        
        if (!Radio) {
            allSelected = false;
            alert(`Please select an attendance option for student ${i}.`);
            break;
        }

        let attendanceStatus = Radio.value;
        let reason = document.getElementById(`reason${i}`).value;
        let rollNumber = document.querySelectorAll('tr')[i].children[0].textContent;
        let studentName = document.querySelectorAll('tr')[i].children[1].textContent;

        if (attendanceStatus === "absent" || attendanceStatus === "leave" || attendanceStatus === "onduty") {
            attendanceData.push({
                rollNumber: rollNumber,
                name: studentName,
                status: attendanceStatus,
                reason: reason
            });
        }
    }

    if (allSelected) {
        localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
        window.location.href = 'main.html';
    }
}

function displayDateAndHour() {
    const storedDate = localStorage.getItem('date');
    const storedHour = localStorage.getItem('time');

    document.getElementById('dateDisplay').innerText = storedDate || 'No date set';
    document.getElementById('hourDisplay').innerText = storedHour || 'No hour set';
}

window.onload = function() {
    displayDateAndHour();
    document.getElementById('button').addEventListener('click', storeAttendance);
};