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
        question: "Name different types of errors in the execution of a program?",
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




function result() {
    var score = 0;

    if (document.getElementById("correct-answer1").checked) { score++; };
    if (document.getElementById("correct-answer2").checked) { score++; };
    if (document.getElementById("correct-answer3").checked) { score++; };
    if (document.getElementById("correct-answer4").checked) { score++; };
    if (document.getElementById("correct-answer5").checked) { score++; };
    if (document.getElementById("correct-answer6").checked) { score++; };

    document.write("your Total score is :" + score);
}