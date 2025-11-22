// PI Cognitive Assessment Practice Tool Logic

let mode = 'test'; // 'test' or 'practice'
let questions = [];
let current = 0;
let answers = [];
let flags = [];
let timer = null;
let timeLeft = 12 * 60; // 12 minutes in seconds
let startTime = null;
let testEnded = false;

function $(id) { return document.getElementById(id); }

function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(screen + '-screen').classList.add('active');
}

/**
 * Selects a balanced mix of questions from different types
 * Target distribution: ~20 Numerical, ~20 Verbal, ~10 Abstract (total 50)
 */
function selectBalancedQuestions() {
  // Separate questions by type
  const numerical = QUESTIONS.filter(q => q.type === 'Numerical');
  const verbal = QUESTIONS.filter(q => q.type === 'Verbal');
  const abstract = QUESTIONS.filter(q => q.type === 'Abstract');
  
  // Shuffle each type separately
  shuffle(numerical);
  shuffle(verbal);
  shuffle(abstract);
  
  // Select proportional amounts from each type
  const selectedNumerical = numerical.slice(0, 20);
  const selectedVerbal = verbal.slice(0, 20);
  const selectedAbstract = abstract.slice(0, 10);
  
  // Combine all selected questions
  const selected = [...selectedNumerical, ...selectedVerbal, ...selectedAbstract];
  
  // Final shuffle to mix question types throughout the test
  shuffle(selected);
  
  return selected;
}

function startTest(selectedMode) {
  mode = selectedMode;
  questions = selectBalancedQuestions(); // Use balanced selection
  current = 0;
  answers = Array(questions.length).fill(null);
  flags = Array(questions.length).fill(false);
  testEnded = false;
  startTime = Date.now(); // Always set start time for both modes
  showScreen('test');
  updateQuestion();
  updateProgress();
  if (mode === 'test') {
    timeLeft = 12 * 60;
    $("timer").textContent = formatTime(timeLeft);
    timer = setInterval(() => {
      timeLeft--;
      $("timer").textContent = formatTime(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timer);
        endTest();
      }
    }, 1000);
    $("timer").parentElement.style.display = '';
  } else {
    $("timer").parentElement.style.display = 'none';
  }
}

function updateQuestion() {
  const q = questions[current];
  $("current-question-num").textContent = current + 1;
  $("question-type").textContent = q.type + ' Reasoning';
  $("question-text").textContent = q.question;
  const opts = q.options.map((opt, i) => {
    let cls = 'option-btn';
    if (answers[current] === i) cls += ' selected';
    return `<button class="${cls}" onclick="selectOption(${i})">${opt}</button>`;
  }).join('');
  $("question-options").innerHTML = opts;
  updateGrid();
  updateFlagBtn();
}

function selectOption(i) {
  if (testEnded) return;
  answers[current] = i;
  updateQuestion();
  updateProgress();
}

function previousQuestion() {
  if (current > 0) { current--; updateQuestion(); }
}
function nextQuestion() {
  if (current < questions.length - 1) { current++; updateQuestion(); }
}

function updateProgress() {
  const answered = answers.filter(a => a !== null).length;
  $("answered-count").textContent = answered;
  $("total-count").textContent = questions.length;
  $("progress-fill").style.width = (answered / questions.length * 100) + '%';
}

function updateGrid() {
  const grid = $("question-grid");
  grid.innerHTML = '';
  for (let i = 0; i < questions.length; i++) {
    let cls = 'grid-btn';
    if (answers[i] !== null) cls += ' answered';
    if (flags[i]) cls += ' flagged';
    if (i === current) cls += ' current';
    grid.innerHTML += `<button class="${cls}" onclick="jumpTo(${i})">${i+1}</button>`;
  }
}
function jumpTo(i) {
  current = i;
  updateQuestion();
}
function toggleFlag() {
  flags[current] = !flags[current];
  updateFlagBtn();
  updateGrid();
}
function updateFlagBtn() {
  $("flag-icon").textContent = flags[current] ? '🚩' : '🏴';
}
function endTest() {
  testEnded = true;
  if (timer) clearInterval(timer);
  showScreen('results');
  showResults();
}
function showResults() {
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  $("score-value").textContent = correct;
  $("percentage-value").textContent = Math.round(correct / questions.length * 100) + '%';
  let used = mode === 'test' ? 12*60 - timeLeft : Math.round((Date.now() - startTime)/1000);
  if (used < 0) used = 0;
  $("time-value").textContent = formatTime(used);
  $("avg-time-value").textContent = Math.round(used / questions.length) + 's';
  // Breakdown by type
  const types = {};
  questions.forEach((q, i) => {
    if (!types[q.type]) types[q.type] = { total: 0, correct: 0 };
    types[q.type].total++;
    if (answers[i] === q.answer) types[q.type].correct++;
  });
  let breakdown = '';
  for (const t in types) {
    breakdown += `<div class="type-card"><div class="type-label">${t}</div><div class="type-value">${types[t].correct} / ${types[t].total}</div></div>`;
  }
  $("type-breakdown").innerHTML = breakdown;
}
function reviewAnswers() {
  showScreen('review');
  let html = '';
  questions.forEach((q, i) => {
    let user = answers[i];
    let correct = q.answer;
    let cls = user === correct ? 'correct' : (user === null ? '' : 'incorrect');
    html += `<div class="question-container"><div class="question-header"><span>Q${i+1} (${q.type})</span></div><div class="question-content"><p>${q.question}</p><ul>`;
    q.options.forEach((opt, j) => {
      let ocls = 'option-btn';
      if (j === correct) ocls += ' correct';
      if (j === user && user !== correct) ocls += ' incorrect';
      html += `<li><span class="${ocls}">${opt}</span></li>`;
    });
    html += `</ul>`;
    if (mode === 'practice' || user !== correct) {
      html += `<div class="explanation"><strong>Explanation:</strong> ${q.explanation}</div>`;
    }
    html += `</div></div>`;
  });
  $("review-content").innerHTML = html;
}
function restartTest() {
  showScreen('welcome');
}
function backToHome() {
  showScreen('welcome');
}
function backToResults() {
  showScreen('results');
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}// On load, show welcome
window.onload = () => showScreen('welcome');