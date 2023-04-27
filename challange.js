const quizData = [
    {
        question: "Which of the following statements is true about the (const) keyword in C++?",
        a: "A) The (const) keyword can be used to make a variable immutable.",
        b: "B) The (const) keyword can only be applied to function parameters.",
        c: "C) The (const) keyword is used to define constants.",
        d: "D) The (const) keyword can only be used with built-in data types.",
        correct: "a",
    },
    {
        question: "Which of the following statements is true about the (switch) statement in C++?",
        a: "A) The (switch) statement is used to loop through an array.",
        b: "B) The (switch) statement is used to declare variables.",
        c: "C) The (switch) statement can only be used with integers.",
        d: "D) The (switch) statement can replace an (if-else) statement in all cases.",
        correct: "d",
    },
    {
        question: "Which of the following is NOT a valid Python data type?",
        a: "A) integer",
        b: "B) list",
        c: "C) string",
        d: "D) loop",
        correct: "d",
    },
    {
        question: "What is the purpose of a Python package?",
        a: "A) To organize related Python modules into a single directory hierarchy that can be imported and used by other programs.",
        b: "B) To create graphical user interfaces (GUIs) for Python applications.",
        c: "C) To define functions and classes that can be used by other Python scripts.",
        d: "D) To optimize the performance of Python programs.",
        correct: "a",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        a: "A) <a>",
        b: "B) <h1>",
        c: "C) <p>",
        d: "D) <div>",
        correct: "a",
    },
    {
        question: "Which of the following HTML tags is used to define the main heading of a webpage?",
        a: "A) <title>",
        b: "B) <h1>",
        c: "C) <body>",
        d: "D) <header>",
        correct: "b",
    },
    {
        question: "Which of the following CSS properties is used to change the color of text?",
        a: "A) background-color",
        b: "B) border-color", 
        c: "C) color",
        d: "D) text-color",
        correct: "c",
    },
    {
        question: "Which of the following CSS properties is used to add spacing between HTML elements?",
        a: "A) margin",
        b: "B) padding",
        c: "C) border",
        d: "D) spacing",
        correct: "a",
    },
    {
        question: "Which of the following JavaScript statements is used to declare a variable?",
        a: "A) if",
        b: "B) for",
        c: "C) let",
        d: "D) while",
        correct: "c",
    },
    {
        question: "Which of the following JavaScript statements is used to loop through an array?",
        a: "A) if",
        b: "B) switch",
        c: "C) for",
        d: "D) while",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           `            

       }
    }
})
