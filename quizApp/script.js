const questions = [
        {
            question: "¿Cuál es el rasgo de personalidad más destacado de Xavier?",
            answers: [
                { "text": "Su espíritu protector y lealtad incondicional", correct: true },
                { "text": "Su sarcasmo y tendencia a desafiar las reglas", correct: false },
                { "text": "Su calma y habilidad para resolver conflictos", correct: false },
                { "text": "Su ambición y necesidad de destacar", correct: false }
            ]
        },
        {
            question: "Rafayel tiene una habilidad única que lo hace especial en el grupo. ¿Cuál es?",
            answers: [
                { "text": "Es un sanador experto que prioriza la vida por encima de todo", correct: true },
                { "text": "Es un piloto excepcional con un pasado militar", correct: false },
                { "text": "Tiene una conexión telepática con ciertos seres alienígenas", correct: false },
                { "text": "Es un estratega brillante que nunca pierde una batalla", correct: false }
            ]
        },
        {
            question: "¿Qué relación tiene Zayne con la misión principal del juego?",
            answers: [
                { "text": "Es un aliado inicial que luego se convierte en un rival romántico", correct: false },
                { "text": "Es un mercenario contratado para proteger al protagonista", correct: false },
                { "text": "Es el líder de una colonia que guarda secretos importantes", correct: false },
                { "text": "Es un viejo conocido del protagonista con un pasado complicado", correct: true }
            ]
        },
        {
            question: "Sylus es conocido por su carácter complejo. ¿Qué lo motiva principalmente?",
            answers: [
                { "text": "Su deseo de venganza contra aquellos que le traicionaron", correct: false },
                { "text": "Su búsqueda de libertad en un universo lleno de restricciones", correct: true },
                { "text": "Su ambición por descubrir los secretos del cosmos", correct: false },
                { "text": "Su necesidad de redimirse por errores del pasado", correct: false }
            ]
        },
        {
            question: "¿Qué elemento hace que las interacciones con estos personajes sean memorables?",
            answers: [
                { "text": "Las profundas conversaciones que revelan sus emociones y trasfondos", correct: true },
                { "text": "Las constantes rivalidades entre ellos por el afecto del protagonista", correct: false },
                { "text": "Las habilidades especiales que aportan en combate", correct: false },
                { "text": "Las misiones exclusivas que desbloquean cuando te acercas a ellos", correct: false }
            ]
        }, 
        {
            question: "¿Cuál es el principal interés amoroso de la jugadora Lunaris Weir?",
            answers: [
                { "text": "Xavier", correct: false },
                { "text": "Zayne", correct: true },
                { "text": "Rafayel", correct: false },
                { "text": "Sylus", correct: false }
            ]
        },
        {
            question: "¿Cuál es el principal interés amoroso de la jugadora Liz Lim?",
            answers: [
                { "text": "Xavier", correct: false },
                { "text": "Zayne", correct: false },
                { "text": "Rafayel", correct: false },
                { "text": "Sylus", correct: true }
            ]
        }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Tu puntuación es ${score} de ${questions.length}`;
    nextButton.innerHTML = "Jugar de nuevo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();