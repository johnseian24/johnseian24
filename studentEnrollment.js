let DSA = [];
let PL = [];
let Networks = [];
function displayMenu() {
    return prompt(
        "Select an operation:\n" +
        "(A) Enroll\n" +
        "(B) Unenroll\n" +
        "(C) Select Another Subject\n" +
        "(D) Exit"
    ).toUpperCase();
}
function displaySubjects() {
    return prompt(
        "Select a subject:\n" +
        "(A) DSA\n" +
        "(B) PL\n" +
        "(C) Networks"
    ).toUpperCase();
}
function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student to enroll:");
    subjectArray.push(studentName);
    console.log(`Enrolled ${studentName} in the subject.`);
}
function unenrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student to unenroll:");
    let index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log(`Unenrolled ${studentName} from the subject.`);
    } else {
        console.log(`Student ${studentName} is not enrolled in this subject.`);
    }
}
let exitProgram = false;
while (!exitProgram) {
    let subjectChoice = displaySubjects();
    let subjectArray;
    if (subjectChoice === "A") {
        subjectArray = DSA;
    } else if (subjectChoice === "B") {
        subjectArray = PL;
    } else if (subjectChoice === "C") {
        subjectArray = Networks;
    } else {
        console.log("Invalid subject choice. Please try again.");
        continue;
    }
    let operation = displayMenu();
    switch (operation) {
        case "A": 
            enrollStudent(subjectArray);
            break;
        case "B": 
            unenrollStudent(subjectArray);
            break;
        case "C": 
            continue; 
        case "D": 
            exitProgram = true;
            break;
        default:
            console.log("Invalid operation. Please try again.");
            continue;
    }
}
console.log("Enrolled students per subject:");
console.log("DSA:", DSA);
console.log("PL:", PL);
console.log("Networks:", Networks);
