
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
   nextButton.classList.add('hide') 
   while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)

   }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)  
    })
    if(shuffledQuestions.length > currentQuestionsIndex + 1) {
    
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: "What does Wakv (Wah-kuh) mean?",
        answers: [
            {text: 'Cow', correct: true},
            {text: 'Bird', correct: false},
            {text: 'Deer', correct: false},
            {text: 'Racoon', correct: false},
            

        ]
    }, 
    {
        question: "What does Wotko (Woot-Ko) mean?",
        answers: [
            {text: 'Racoon', correct: true},
            {text: 'Bird', correct: false},
            {text: 'Deer', correct: false},
            {text: 'Bear', correct: false},
        ]
    }, 
    {
        question: "What does Wasko (Wah-Sko) mean?",
        answers: [
            {text: 'Giraffe', correct: false},
            {text: 'Bird', correct: false},
            {text: 'Chigger', correct: true},
            {text: 'Bear', correct: false},
        ]
    }, 
    {
        question: "How do you say Hawk?",
        answers: [
            {text: 'Cesse: (Chih-See)', correct: false},
            {text: 'Efv: (Eh-Fuh)', correct: false},
            {text: 'Penwv: (Ben-Wuh)', correct: false},
            {text: 'Ayo: (Aye-Yo)', correct: true},
        ]
    }, 
    {
        question: "How do you say Bear?",
        answers: [
            {text: 'Cesse: (Chih-See)', correct: false},
            {text: 'Efv: (Eh-Fuh)', correct: false},
            {text: 'Wotko: (Woot-Ko) ', correct: false},
            {text: 'Nokose: (No-Koe-See)', correct: true},
        ]
    }, 
]