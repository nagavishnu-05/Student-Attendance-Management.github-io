const Staff = localStorage.getItem("staffname");
const Semester = localStorage.getItem("semester");
const Date = localStorage.getItem("date");
const Time = localStorage.getItem("time");

const displayDiv = document.getElementById("display");

if(Staff && Semester && Date && Time){
    const msg = `Welcome ${Staff}!...\n\
    You have Logged In Successfully !!`;
    displayDiv.innerHTML = msg;
}