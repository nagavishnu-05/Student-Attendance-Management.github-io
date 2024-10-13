let button = document.getElementById("button");
            
let staff = {
    "I Semester" : ["Ms. Lakshmi Priya", "Ms. V. Praveena",  "Mr. R. Sathish Kumar", "Dr. B.K. Balachandhar", "Mr. M. Muralishankar", "Mr. G. Balamuralikrishnan"],
    "II Semester" : ["Mr. Sivam", "Ms. S. Benita",  "Dr. M. Sornavalli", "Dr. D. Madhan", "Mr. M. Muralishankar", "Mr. G. Balamuralikrishnan", "Mrs. V. Umayal Muthu", "Mr. M. Karuppaiah Rajkumar"],
    "III Semester" : ["Mr. R. Sathish Kumar", "Mrs. A. Benazir Begum", "Mrs. D. Jansi Rani", "Dr. S. Senthil Kumar", "Mr. G. Balamuralikrishnan"],
};
            
const semester = document.getElementById("semester");
const staffs = document.getElementById("staff");
            
semester.addEventListener("change", function() {
    staffs.innerHTML = '' ;
               
    const sem = this.value;
    const names = staff[sem];
    
    if(names){
        names.forEach(function(staff){
            const option = document.createElement("option");
            option.textContent = staff;
            staffs.appendChild(option);
        });
    }
    else{
        const option = document.createElement("option");
        option.textContent = "Select valid Semester";
        staffs.appendChild(option);
    }
});

button.addEventListener("click", function() {
    const semselect = semester.value;
    const staffselect = staffs.value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    
    if (semselect && staffselect && date && time) {
        localStorage.setItem("staffname", staffselect);
        localStorage.setItem("semester", semselect);
        localStorage.setItem("date", date);
        localStorage.setItem("time", time);
        
        window.location.href = "main.html";
    }
    else{
        alert("Please Fill All input fields");
    }
});