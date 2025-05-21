// 데이터 정의
const progressData = [
  { subject: 'Biology', value: 64, avg: 80 },
  { subject: 'Chemistry', value: 78, avg: 70 },
  { subject: 'English', value: 82, avg: 88 },
  { subject: 'Geography', value: 55, avg: 70 },
  { subject: 'History', value: 67, avg: 75 },
  { subject: 'Mathematics', value: 60, avg: 85 },
  { subject: 'Physics', value: 57.5, avg: 95 },
  { subject: 'Psychology', value: 73, avg: 80 },
];

const quizData = [
  // Biology
  {
    id: 'bio1',
    subject: 'Biology',
    question: 'What is the powerhouse of the cell?',
    details: {
      yourAnswer: 'Nucleus',
      correctAnswer: 'Mitochondria',
      aiHelp: "Hint: It's an organelle that produces energy.",
    },
  },
  {
    id: 'bio2',
    subject: 'Biology',
    question: 'What molecule carries genetic information?',
    details: {
      yourAnswer: 'RNA',
      correctAnswer: 'DNA',
      aiHelp: 'DNA (deoxyribonucleic acid) is the main genetic material.',
    },
  },
  // Chemistry
  {
    id: 'chem1',
    subject: 'Chemistry',
    question: 'What is the chemical symbol for gold?',
    details: {
      yourAnswer: 'Go',
      correctAnswer: 'Au',
      aiHelp: "Remember: from Latin 'Aurum'",
    },
  },
  {
    id: 'chem2',
    subject: 'Chemistry',
    question: 'What is H2O commonly known as?',
    details: {
      yourAnswer: 'Hydrogen Peroxide',
      correctAnswer: 'Water',
      aiHelp: 'H2O is water. Hydrogen peroxide is H2O2.',
    },
  },
  // English
  {
    id: 'eng1',
    subject: 'English',
    question: 'What is the synonym of "happy"?',
    details: {
      yourAnswer: 'Sad',
      correctAnswer: 'Joyful',
      aiHelp: 'Synonyms for happy include joyful, cheerful, and delighted.',
    },
  },
  {
    id: 'eng2',
    subject: 'English',
    question: 'What is the antonym of "difficult"?',
    details: {
      yourAnswer: 'Impossible',
      correctAnswer: 'Easy',
      aiHelp: 'Antonyms for difficult include easy, simple, and effortless.',
    },
  },
  // Geography
  {
    id: 'geo1',
    subject: 'Geography',
    question: 'What is the largest continent?',
    details: {
      yourAnswer: 'Africa',
      correctAnswer: 'Asia',
      aiHelp: 'Asia is the largest continent by both area and population.',
    },
  },
  {
    id: 'geo2',
    subject: 'Geography',
    question: 'Which ocean is on the east coast of the United States?',
    details: {
      yourAnswer: 'Pacific',
      correctAnswer: 'Atlantic',
      aiHelp: 'The Atlantic Ocean is on the east coast of the US.',
    },
  },
  // History
  {
    id: 'his1',
    subject: 'History',
    question: 'Who was the first President of the United States?',
    details: {
      yourAnswer: 'Abraham Lincoln',
      correctAnswer: 'George Washington',
      aiHelp: 'George Washington was the first US President.',
    },
  },
  {
    id: 'his2',
    subject: 'History',
    question: 'In which year did World War II end?',
    details: {
      yourAnswer: '1944',
      correctAnswer: '1945',
      aiHelp: 'World War II ended in 1945.',
    },
  },
  // Mathematics
  {
    id: 'math1',
    subject: 'Mathematics',
    question: 'What is the derivative of f(x) = x² + 3x + 2?',
    details: {
      yourAnswer: '2x + 2',
      correctAnswer: '2x + 3',
      aiHelp: 'The derivative of x² is 2x, and the derivative of 3x is 3.',
    },
  },
  {
    id: 'math2',
    subject: 'Mathematics',
    question: 'What is the value of π (pi) to two decimal places?',
    details: {
      yourAnswer: '3.12',
      correctAnswer: '3.14',
      aiHelp: 'π (pi) is approximately 3.14.',
    },
  },
  // Physics
  {
    id: 'phy1',
    subject: 'Physics',
    question: "What is Newton's Second Law of Motion?",
    details: {
      yourAnswer: 'For every action, there is an equal and opposite reaction.',
      correctAnswer: 'F = ma',
      aiHelp: 'F = ma (Force = mass × acceleration).',
    },
  },
  {
    id: 'phy2',
    subject: 'Physics',
    question: 'What is the SI unit of electric current?',
    details: {
      yourAnswer: 'Volt',
      correctAnswer: 'Ampere',
      aiHelp: 'Ampere (A) is the SI unit of electric current.',
    },
  },
  // Psychology
  {
    id: 'psy1',
    subject: 'Psychology',
    question: 'Who is known as the father of psychoanalysis?',
    details: {
      yourAnswer: 'Carl Jung',
      correctAnswer: 'Sigmund Freud',
      aiHelp: 'Sigmund Freud is considered the father of psychoanalysis.',
    },
  },
  {
    id: 'psy2',
    subject: 'Psychology',
    question: 'What is the term for a persistent irrational fear?',
    details: {
      yourAnswer: 'Anxiety',
      correctAnswer: 'Phobia',
      aiHelp: 'A phobia is a persistent, irrational fear of a specific object, activity, or situation.',
    },
  },
];

const allSubjects = [
  'Biology', 'Chemistry', 'English', 'Geography', 'History', 'Mathematics', 'Physics', 'Psychology'
];

// 상태
let selectedSubjects = [];
let quizOpen = {};
let quizState = {};

// 초기 상태 세팅
quizData.forEach(q => {
  quizState[q.id] = {
    notes: '',
  };
});

// 렌더 함수
function renderProgress() {
  const table = document.getElementById('progress-table');
  if (selectedSubjects.length === 0) {
    table.innerHTML = '';
    return;
  }
  const filtered = progressData.filter(d => selectedSubjects.includes(d.subject));
  table.innerHTML = `
    <div class="progress-header">
      <span class="progress-label">Subject Study Rate</span>
      <span class="progress-label right">Subject Average</span>
    </div>
    ${filtered.map(d => `
      <div class="progress-row">
        <span class="progress-subject">${d.subject}</span>
        <div class="progress-bar-bg">
          <div class="progress-bar" style="width:${d.value}%">${d.value}</div>
        </div>
        <span class="progress-avg">${d.avg}</span>
      </div>
    `).join('')}
    <div class="progress-scale">
      <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>
    </div>
  `;
}

function renderQuiz() {
  const list = document.getElementById('quiz-list');
  if (selectedSubjects.length === 0) {
    list.innerHTML = '';
    return;
  }
  const filtered = quizData.filter(q => selectedSubjects.includes(q.subject));
  list.innerHTML = filtered.map((q) => {
    const open = !!quizOpen[q.id];
    const state = quizState[q.id] || { notes: '' };
    return `
      <div class="quiz-card">
        <div class="quiz-header">
          <span class="quiz-tag ${q.subject.toLowerCase()}">${q.subject}</span>
          <span class="quiz-question">${q.question}</span>
          <button class="quiz-toggle-btn" data-id="${q.id}">${open ? '▲' : '▼'}</button>
        </div>
        ${open ? `
          <div class="quiz-detail-row">
            <div class="quiz-detail-col">
              <div class="quiz-detail-label">Your answer:</div>
              <input class="quiz-input" type="text" value="${q.details.yourAnswer.replace(/"/g, '&quot;')}" readonly>
            </div>
            <div class="quiz-detail-col">
              <div class="quiz-detail-label">Correct answer:</div>
              <input class="quiz-input quiz-input-correct" type="text" value="${q.details.correctAnswer}" readonly>
            </div>
          </div>
          <div class="quiz-notes">
            <div class="quiz-notes-label">Notes:</div>
            <textarea class="quiz-notes-box" data-id="${q.id}" data-type="notes">${state.notes}</textarea>
            <div class="quiz-ai-help">
              <button class="ai-help-btn" data-id="${q.id}">🤖 AI Help</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// 과목 버튼 재배치
function reorderSubjectButtons() {
  const subjectSelector = document.querySelector('.subject-selector');
  const buttons = Array.from(subjectSelector.querySelectorAll('.subject-btn'));
  
  // 선택된 과목과 선택되지 않은 과목 분리
  const selectedButtons = buttons.filter(btn => 
    selectedSubjects.includes(btn.getAttribute('data-subject'))
  );
  const unselectedButtons = buttons.filter(btn => 
    !selectedSubjects.includes(btn.getAttribute('data-subject'))
  );
  
  // 선택된 과목을 알파벳 순으로 정렬
  selectedButtons.sort((a, b) => 
    a.getAttribute('data-subject').localeCompare(b.getAttribute('data-subject'))
  );
  
  // 선택되지 않은 과목을 알파벳 순으로 정렬
  unselectedButtons.sort((a, b) => 
    a.getAttribute('data-subject').localeCompare(b.getAttribute('data-subject'))
  );
  
  // 모든 버튼 제거
  buttons.forEach(btn => btn.remove());
  
  // 선택된 과목 먼저 추가
  selectedButtons.forEach(btn => subjectSelector.appendChild(btn));
  // 선택되지 않은 과목 추가
  unselectedButtons.forEach(btn => subjectSelector.appendChild(btn));
}

function update() {
  reorderSubjectButtons();
  renderProgress();
  renderQuiz();
  setupQuizInputEvents();
  setupQuizToggle();
  setupAIHelp();
}

// 버튼 이벤트
function setupSubjectButtons() {
  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subj = btn.getAttribute('data-subject');
      if (selectedSubjects.includes(subj)) {
        selectedSubjects = selectedSubjects.filter(s => s !== subj);
      } else {
        selectedSubjects.push(subj);
        selectedSubjects.sort(); // 과목 추가 시 정렬
      }
      document.querySelectorAll('.subject-btn').forEach(b => {
        b.classList.toggle('active', selectedSubjects.includes(b.getAttribute('data-subject')));
      });
      update();
    });
  });
}

// 퀴즈 토글 이벤트
function setupQuizToggle() {
  document.querySelectorAll('.quiz-header').forEach(header => {
    header.onclick = (e) => {
      // 화살표 버튼 클릭 시에도 이벤트가 중복 실행되지 않도록 방지
      if (e.target.classList.contains('quiz-toggle-btn')) return;
      const btn = header.querySelector('.quiz-toggle-btn');
      if (!btn) return;
      const id = btn.getAttribute('data-id');
      quizOpen[id] = !quizOpen[id];
      update();
    };
  });
  document.querySelectorAll('.quiz-toggle-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation(); // 상위 header 클릭 이벤트 방지
      const id = btn.getAttribute('data-id');
      quizOpen[id] = !quizOpen[id];
      update();
    };
  });
}

// 입력 이벤트
function setupQuizInputEvents() {
  document.querySelectorAll('.quiz-notes-box').forEach(textarea => {
    // 초기 높이 설정
    adjustTextareaHeight(textarea);
    
    textarea.oninput = (e) => {
      const id = textarea.getAttribute('data-id');
      if (!quizState[id]) quizState[id] = { notes: '' };
      quizState[id].notes = textarea.value;
      
      // 높이 자동 조절
      adjustTextareaHeight(textarea);
    };
  });
}

// 텍스트 영역 높이 자동 조절
function adjustTextareaHeight(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// AI 도움 버튼 이벤트
function setupAIHelp() {
  document.querySelectorAll('.ai-help-btn').forEach(btn => {
    btn.onclick = (e) => {
      const id = btn.getAttribute('data-id');
      const help = quizData.find(q => q.id === id)?.details?.aiHelp || '';
      if (!quizState[id]) quizState[id] = { notes: '' };
      quizState[id].notes = help;
      update();
      
      // AI 도움말 입력 후 높이 조절
      const textarea = document.querySelector(`.quiz-notes-box[data-id="${id}"]`);
      if (textarea) {
        setTimeout(() => adjustTextareaHeight(textarea), 0);
      }
    };
  });
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
  setupSubjectButtons();
  setupSliderButtons();
  reorderSubjectButtons();
  update();
});

// 슬라이더 버튼 이벤트
function setupSliderButtons() {
  const subjectSelector = document.querySelector('.subject-selector');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  const scrollAmount = 200; // 스크롤할 픽셀 양

  prevBtn.addEventListener('click', () => {
    subjectSelector.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    subjectSelector.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // 스크롤 위치에 따라 버튼 표시/숨김
  subjectSelector.addEventListener('scroll', () => {
    const isAtStart = subjectSelector.scrollLeft === 0;
    const isAtEnd = subjectSelector.scrollLeft + subjectSelector.clientWidth >= subjectSelector.scrollWidth;
    
    prevBtn.style.opacity = isAtStart ? '0.5' : '1';
    nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
  });
} 