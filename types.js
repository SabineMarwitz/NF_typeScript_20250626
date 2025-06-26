"use strict";
const studentA = {
    name: "Anton",
    lastName: "Meier",
    age: 16,
    grade: [1, 4, 3, 1, "A", undefined, 1, 2],
};
const studentB = {
    name: "Berta",
    lastName: "Müller",
    age: 17,
    grade: ["A", undefined, 1],
};
const studentC = {
    name: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grade: ["A", 1, undefined, 3, 2, 4, 5],
};
function displayStudent(student) {
    let output = "";
    const grades = student.grade.map((item) => (item === undefined ? "*" : item));
    output += `${student.name} ${student.lastName} (${student.age})\n`;
    output += "==============================\n";
    output += `Grades: ${grades.toString()}\n`;
    return output;
}
function logStudents(...args) {
    for (let student of args) {
        console.log(displayStudent(student));
    }
}
logStudents(studentA, studentB, studentC);
