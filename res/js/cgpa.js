const gpaList = document.getElementById("gpa-list");
const cgpaForm = document.getElementById("CGPA-form");
const cgpaDisplay = document.getElementById("cgpa-value");
const gpaInput = document.getElementById("semester-gpa");
const removeGpaBtn = document.getElementById("remove-gpa");

let cgpa = [];

cgpaForm.addEventListener("submit", function (e){
    e.preventDefault();

    
    const totalgpa = parseFloat(gpaInput.value.trim());
    
    if (totalgpa > 5 || totalgpa < 0 || isNaN(totalgpa)) {
    alert('Please enter a valid GPA between 0.00 and 5.00');
        return;
    }

    cgpa.push(totalgpa);

    const listItem = document.createElement("li");
    listItem.textContent = `Semesters ${cgpa.length}: GPA ${totalgpa.toFixed(2)}`;
    gpaList.appendChild(listItem);

    updateCGPA();
    gpaInput.value = "";

    
});

function updateCGPA(){

    const sum = cgpa.reduce((acc, val) => acc + val, 0);
    const finalCgpa = sum / cgpa.length;
    cgpaDisplay.textContent = finalCgpa.toFixed(2);
}

removeGpaBtn.addEventListener("click", function(){
    if (cgpa.length === 0){
        alert = "There are no GPA entries";
        return;
    }

    cgpa.pop();
    gpaList.removeChild(gpaList.lastElementChild);
    updateCGPA();
});

window.addEventListener("DOMContentLoaded", function(){
    const userName = document.getElementById("user-name");
    let name = prompt("What is your name?");

    if (name && name.trim() !== "") {
        userName.textContent = name.trim();
      }
});