var students = [
    {
        1:{
            names: "asif",
            subject:{
                bangla: 80,
                english: 85,
                math: 90,
                religious_study : 75,
                science: 100
            }
        }
    }
];

// Added Second Student 
var student = {
    names : "sakib",
    subject : {
        bangla : 80,
        english : 85,
        math: 90,
        religious_study : 65,
        science : 80
    }
}
var element = {}
element [2] = student;
students.push(element);

// Added Third Student 
var student = {
    names : "Labib",
    subject : {
        bangla : 10,
        english : 40,
        math: 60,
        religious_study : 65,
        science : 90
    }
}
var element = {}
element [3] = student;
students.push(element);

// Added Fourth Student 
var student = {
    names : "rubayet",
    subject : {
        bangla : 100,
        english : 90,
        math: 60,
        religious_study : 75,
        science : 80
    }
}
var element = {}
element [4] = student;
students.push(element);

// Added Fifth Student 
var student = {
    names : "Alif",
    subject : {
        bangla : 10,
        english : 15,
        math: 20,
        religious_study : 30,
        science : 15
    }
}
var element = {}
element [5] = student;
students.push(element);


// Added Sixth Student 
var student = {
    names : "Rana",
    subject : {
        bangla : 100,
        english : 15,
        math: 25,
        religious_study : 50,
        science : 75
    }
}
var element = {}
element [6] = student;
students.push(element);


// Added Seventh Student 
var student = {
    names : "Wahid",
    subject : {
        bangla : 90,
        english : 50,
        math: 25,
        religious_study : 50,
        science : 75
    }
}
var element = {}
element [7] = student;
students.push(element);


// Added Eighth Student 
var student = {
    names : "nurul",
    subject : {
        bangla : 90,
        english : 50,
        math: 60,
        religious_study : 70,
        science : 80
    }
}
var element = {}
element [8] = student;
students.push(element);


// Added Ninth Student 
var student = {
    names : "Rahat",
    subject : {
        bangla : 60,
        english : 65,
        math: 65,
        religious_study : 90,
        science : 80
    }
}
var element = {}
element [9] = student;
students.push(element);


// Added Tenth Student 
var student = {
    names : "babar",
    subject : {
        bangla : 100,
        english : 100,
        math: 100,
        religious_study : 100,
        science : 100
    }
}
var element = {}
element [10] = student;
students.push(element);

// All Students Output
// console.log(students);

// Grade Push
const fail = []
const grade_a_plus = []
const grade_a = []
const grade_b = []
const others = []

// checking student name-1
// console.log(students[0][1].names)
// checking student subject marks in object
// console.log(students[0][1].subject);


student_name = students[0][1].names;

total = students[0][1].subject.bangla + students[0][1].subject.english + students[0][1].subject.math + students[0][1].subject.religious_study + students[0][1].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// Checking student second

student_name = students[1][2].names;

total = students[1][2].subject.bangla + students[1][2].subject.english + students[1][2].subject.math + students[1][2].subject.religious_study + students[1][2].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// checking student third


student_name = students[2][3].names;

total = students[2][3].subject.bangla + students[2][3].subject.english + students[2][3].subject.math + students[2][3].subject.religious_study + students[2][3].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// checking Fourth


student_name = students[3][4].names;

total = students[3][4].subject.bangla + students[3][4].subject.english + students[3][4].subject.math + students[3][4].subject.religious_study + students[3][4].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// checking Fifth student


student_name = students[4][5].names;

total = students[4][5].subject.bangla + students[4][5].subject.english + students[4][5].subject.math + students[4][5].subject.religious_study + students[4][5].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// checking Sixth Student


student_name = students[5][6].names;

total = students[5][6].subject.bangla + students[5][6].subject.english + students[5][6].subject.math + students[5][6].subject.religious_study + students[5][6].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// checking Seventh Student


student_name = students[6][7].names;

total = students[6][7].subject.bangla + students[6][7].subject.english + students[6][7].subject.math + students[6][7].subject.religious_study + students[6][7].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// Checking Eighth Student

student_name = students[7][8].names;

total = students[7][8].subject.bangla + students[7][8].subject.english + students[7][8].subject.math + students[7][8].subject.religious_study + students[7][8].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// Checking Ninth Student 


student_name = students[8][9].names;

total = students[8][9].subject.bangla + students[8][9].subject.english + students[8][9].subject.math + students[8][9].subject.religious_study + students[8][9].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// Checking Tenth Student


student_name = students[9][10].names;

total = students[9][10].subject.bangla + students[9][10].subject.english + students[9][10].subject.math + students[9][10].subject.religious_study + students[9][10].subject.science;

average = total / 5;
if(average >= 80){
    grade_a_plus.push(student_name)
}
else if(average >= 70 && average < 80){
    grade_a.push(student_name)
}
else if(average >= 60 && average <70){
    grade_b.push(student_name)
}
else if(average >= 33 && average < 60){
    others.push(student_name)
}
else if(average < 33){
    fail.push(student_name)
}

// console.log(fail);
// console.log(others);
// console.log(grade_b);
// console.log(grade_a);
// console.log(grade_a_plus);

console.log(`${fail[0]} deleted`)
console.log(`A+ = ${grade_a_plus[0]}, ${grade_a_plus[1]}, ${grade_a_plus[2]}`);
console.log(`A = ${grade_a[0]}, ${grade_a[1]}`);
console.log(`B = `);
console.log(`Others = ${others[0]}, ${others[1]}, ${others[2]}`);