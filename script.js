const quizData = [
    {
        question: 'Quel âge a maman ?',
        a: '13',
        b: '23',
        c: '33',
        d: '43',
        correct: 'c',
    },
    {
        question: 'Quel est le prénom de la mère de maman ?',
        a: 'Gisele',
        b: 'Touatia',
        c: 'Karine',
        d: 'Françoise',
        correct: 'd',
    },
    {
        question: 'Quelle est la couleur des yeux de maman ?',
        a: 'gris',
        b: 'vert',
        c: 'bleue',
        d: 'noir',
        correct: 'b',
    },
    {
        question: 'Quel âge a papa ?',
        a: '25',
        b: '35',
        c: '45',
        d: '55',
        correct: 'b',
    },
    {
        question: 'Quel est le prénom du père de papa ?',
        a: 'Patrice',
        b: 'Kelil',
        c: 'Hachmi',
        d: 'Ali',
        correct: 'd',
    },
    {
        question: 'Quelle est la couleur des yeux de papa ?',
        a: 'bleue',
        b: 'vert',
        c: 'noir',
        d: 'gris',
        correct: 'c',
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

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

submitBtn.addEventListener('click', () => {
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
                <h2> Bravo, tu as  ${score} bonnes réponse.</h2>
                <h3> si tu as eu au moins 4 bonnes réponses, tu as le droit à un bonbon</h3>
                
                <button onclick="location.reload()">Tu veux recommencer ?</button>
            `;
        }
    }
});
