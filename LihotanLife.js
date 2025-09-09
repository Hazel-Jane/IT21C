console.log ("Hello Universe");

let student = "Hazel Jane Lihotan";
let course = "Bachelor of Science in Information Technology";
let year = "2nd year";


console.log ("Name :" +student+ "\nCourse :" +course+ "\nYear:" +year+ "\n" );

let hoursleep = 5;
let hourstudy = 3;

let sum = hoursleep + hourstudy;
let diff = hoursleep - hourstudy;

console.log ("Total hours of sleep: " +sum+ "\nTotal hours of study: " +diff+ "\n" );

let studyhours = 5;

if(studyhours > 5){
    console.log("Great! You studied well enough today");
}else{
    console.log("You need to study more");
}

let subjects = ["Web Systems", "Event Driven", "OOP", "Multimedia", "Networking"];
console.log("Lists of subjects: " + "\n");
for(let i = 0; i < subjects.length; i++){
    
    console.log(subjects[i] );
}

function StudentSummary(){
    return "My Name is " +student+ " a " + year+ " from " +course;
}
console.log(StudentSummary());