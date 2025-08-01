const gradePoints = {
    A : 5,
    B : 4,
    C : 3,
    D : 2,
    E : 1,
    F : 0,
};

const form = document.getElementById("grade-form");
const courseInput = document.getElementById("course");
const unitInput = document.getElementById("credit-unit");
const gradeInput = document.getElementById("grade");
const gradeDisplay = document.getElementById("gpa-value");
const courseList = document.getElementById("course-list");

let courses = [];


form.addEventListener("submit", function (e){
    e.preventDefault();
    const course = courseInput.value.trim();
    const unit = parseInt(unitInput.value);
    const grade = gradeInput.value;

    if (!course || isNaN(unit) || !grade)
    return;

    courses.push({course, unit, grade});

    updateGPA();
    courseInput.value = "";
    unitInput.value = "1";
    gradeInput.value = "A"

    renderCourses();
});



function updateGPA(){
    let totalUnits = 0;
    let totalPoints = 0;

    courses.forEach(({unit, grade})=> {
        const point = gradePoints[grade];
        totalUnits += unit;
        totalPoints += point * unit;
    });

    const gpa = totalPoints / totalUnits || 0;
    gradeDisplay.textContent = gpa.toFixed(2);
}

function renderCourses(){
    courseList.innerHTML = "";

    courses.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            Course code ${item.course} - ${item.unit} unit(s) - Grade ${item.grade}
            <button onclick="removeCourse(${index})" style="margin-left:10px; color:red; list-style-gap:disc;">x</button>
        `
        courseList.appendChild(listItem);
    });
}

function removeCourse(index){
    courses.splice(index, 1);
    updateGPA();
    renderCourses();
}

