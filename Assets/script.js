/*const Questions = [{
        question: "What does CSS stand for ?",
        a: "Cascading style sheet",
        b: "Coding style sheet",
        c: "Coding sytem style",
        d: "Cascading style system",
        correct: "a"
    },

    {
        question: "Which one is not a coding language?",
        a: "Java",
        b: "Python",
        c: "Java scrip",
        d: "C#",
        correct: "d"

    },

    {
        question: "Which error is not among different types of errors in the execution of a program?",
        a: "Syntax errors",
        b: "Runtime errors",
        c: "Coding errors",
        d: "Logical errors",
        correct: "c"
    },

    {
        question: "which one is not a css property?",
        a: "margin",
        b: "padding",
        c: "spreading",
        d: "color",
        correct: "c"
    },

    {
        question: "which one of the following is not a computer hardware?",
        a: "hard disk",
        b: "ram",
        c: "monitor",
        d: "mice",
        correct: "d"
    }

    {
        question: "which one is not a selector in CSS"
        A:"Id selector"
        b:"Element selector"
        c:"Class selector"
        d:"HTML selector"
        correct:"d"
    }
];*/



//Result function
function result() {
    var score = 0;
    var percentage = 0;
    var calculate_percent = 0;

    if (document.getElementById("correct-answer1").checked) { score++; };
    if (document.getElementById("correct-answer2").checked) { score++; };
    if (document.getElementById("correct-answer3").checked) { score++; };
    if (document.getElementById("correct-answer4").checked) { score++; };
    if (document.getElementById("correct-answer5").checked) { score++; };
    if (document.getElementById("correct-answer6").checked) { score++; };

    document.write("Your Total Score is :" + " " + score);
    alert("Get To See Your results");

    //Calculating scores

    calculate_percent = score / 6;
    percentage = score / 6 * 100;

    if (percentage >= 80) {
        document.write(" " + "[Performed Excellently]");
    } else if (percentage >= 50 && percentage <= 80) {
        document.write(" " + "[Passed Fairly]");
    } else {
        document.write(" " + "[Performed Poorly , Please Retake The Quiz ]");
    }
}

//Next function
function next(id) {
    document.getElementsByClassName("quest-container")[id - 1].style.display = "none";
    document.getElementsByClassName("quest-container")[id].style.display = "block";

}