// App Logic for Flashcards and Quiz

let cardsData = [];
let currentCardIndex = 0;
let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;

// Fetch the cards data
fetch('data/cards.json')
    .then(response => response.json())
    .then(data => {
        cardsData = data;
        initApp();
    })
    .catch(err => console.error("Error loading cards:", err));

const appContent = document.getElementById('app-content');
const btnFlashcards = document.getElementById('mode-flashcards');
const btnQuiz = document.getElementById('mode-quiz');
const btnSummary = document.getElementById('mode-summary');

function initApp() {
    setupRouting();
    renderFlashcards();
}

function setupRouting() {
    btnFlashcards.addEventListener('click', () => {
        setActiveTab(btnFlashcards);
        renderFlashcards();
    });
    btnQuiz.addEventListener('click', () => {
        setActiveTab(btnQuiz);
        startQuiz();
    });
    btnSummary.addEventListener('click', () => {
        setActiveTab(btnSummary);
        renderSummary();
    });
}

function setActiveTab(button) {
    [btnFlashcards, btnQuiz, btnSummary].forEach(b => b.classList.remove('active'));
    button.classList.add('active');
}

// === FLASHCARDS MODE ===
function renderFlashcards() {
    if (cardsData.length === 0) return;
    
    appContent.innerHTML = `
        <div class="card-container">
            <div class="card" id="flashcard" onclick="this.classList.toggle('flipped')">
                <div class="card-front" id="card-front"></div>
                <div class="card-back">
                    <div id="card-back-title" style="font-weight:bold; margin-bottom:1rem;"></div>
                    <div id="card-back-exp" class="card-explanation"></div>
                </div>
            </div>
        </div>
        <div class="card-nav">
            <button class="btn-nav" id="btn-prev">⬅ Prev</button>
            <button class="btn-nav" id="btn-next">Next ➡</button>
        </div>
        <div class="card-count" id="card-count"></div>
    `;

    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCardDisplay();
        }
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentCardIndex < cardsData.length - 1) {
            currentCardIndex++;
            updateCardDisplay();
        }
    });

    updateCardDisplay();
}

function updateCardDisplay() {
    const card = cardsData[currentCardIndex];
    document.getElementById('flashcard').classList.remove('flipped');
    
    setTimeout(() => {
        document.getElementById('card-front').textContent = card.q;
        document.getElementById('card-back-title').textContent = card.a;
        document.getElementById('card-back-exp').innerHTML = card.exp;
        document.getElementById('card-count').textContent = `Card ${currentCardIndex + 1} of ${cardsData.length}`;
    }, 150); // slight delay to wait for flip animation
}

// === QUIZ MODE ===
function startQuiz() {
    // get random 10 MCQs
    const mcqs = cardsData.filter(c => c.type === 'mcq');
    quizQuestions = mcqs.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuizIndex = 0;
    score = 0;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        appContent.innerHTML = `
            <div class="quiz-container" style="text-align:center;">
                <h2>Quiz Complete! 🎉</h2>
                <p style="font-size: 1.5rem;">Your Score: ${score} / ${quizQuestions.length}</p>
                <button class="btn-nav" style="margin-top:2rem;" onclick="startQuiz()">Try Again</button>
            </div>
        `;
        return;
    }

    const qData = quizQuestions[currentQuizIndex];
    appContent.innerHTML = `
        <div class="quiz-container">
            <div style="font-weight:bold; margin-bottom:1rem;">Question ${currentQuizIndex + 1} of ${quizQuestions.length}</div>
            <div class="quiz-question">${qData.q}</div>
            <div class="quiz-options" id="quiz-options">
                ${qData.opts.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt}</button>`).join('')}
            </div>
            <div id="quiz-feedback" class="quiz-feedback"></div>
            <button class="btn-nav" id="btn-next-q" style="display:none; margin-top:2rem;">Next Question ➡</button>
        </div>
    `;

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', (e) => handleAns(e, qData));
    });

    document.getElementById('btn-next-q').addEventListener('click', () => {
        currentQuizIndex++;
        renderQuizQuestion();
    });
}

function handleAns(e, qData) {
    const selectedText = e.target.textContent;
    const isCorrect = selectedText === qData.a;
    
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
        if (btn.textContent === qData.a) {
            btn.classList.add('correct');
        } else if (btn === e.target && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) score++;

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.add('visible');
    feedback.innerHTML = `<strong>${isCorrect ? 'Correct! ✅' : 'Oops! ❌'}</strong><br>${qData.exp}`;
    feedback.style.backgroundColor = isCorrect ? '#D4EFDF' : '#FADBD8';
    feedback.style.color = isCorrect ? '#196F3D' : '#943126';

    document.getElementById('btn-next-q').style.display = 'block';
}

// === SUMMARY MODE ===
function renderSummary() {
    fetch('crash_guide_by_bahnasy.md')
        .then(res => res.text())
        .then(text => {
            // marked.parse() handles all the heavy lifting and edge cases
            appContent.innerHTML = `<div class="summary-container">${marked.parse(text)}</div>`;
        })
        .catch(err => {
            appContent.innerHTML = `<div class="summary-container"><h2>Error loading guide.</h2></div>`;
        });
}

