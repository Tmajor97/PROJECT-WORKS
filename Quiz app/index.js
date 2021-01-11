const quizData = [
    {
        question: " What is the highest mountain in Britain?",
        a: "Mount Ben Nevis ",
        b: "Mount fiji",
        c: "Mount Ben Macdui",
        d: "Mount Everest",
        correct:"a"
    }, {
        question: "In which year was Joan of Arc burned at the stake?",
        a: "1534",
        b: "1245",
        C: "1970",
        d: "1431",
        correct: "d"
    }, {
        question: "Which country is the origin of the cocktail Mojito?",
        a: "Spain",
        b: "Cuba",
        c: "Mexico",
        d: "Nigeria",
        correct:"b"
    }, {
        question: "Who scored the first Premier League hat-trick?",
        a: "Christiano Ronaldo",
        b: "Steven Gerald",
        c: "Eric Cantona",
        d: "Wayne Rooney",
        correct:"c"
        
    }, {
        question:"Tom Cruise is an outspoken member of which religion?",
        a: "Islam",
        b: "Christianity",
        c: "Scientology",
        d: "Athesim",
        correct:"c"
    }
        
];

/*
//first target the question text
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


//load the quiz data
let currentQuiz = 0;


loadQuiz();

function loadQuiz(){
        
       const currentQuizData = quizData[currentQuiz];
       
       question.innerText = currentQuizData.question;
       
       a_text.innerText = currentQuizData.a;
       b_text.innerText = currentQuizData.b;
       c_text.innerText = currentQuizData.c;
       d_text.innerText = currentQuizData.d;
}

 



submitBtn.addEventListener( 'click', () => { 
   //check to see the correct answer
    const answer = getSelected();


  
 });   
 

*/


  
   
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}




function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
