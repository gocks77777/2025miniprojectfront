import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './test.css';

const dummyProblems = [
  {
    problem_set_id: 1,
    subject: '알고리즘',
    difficulty_level: 'easy',
    question_type: '서술형',
    question: 'FIFO 원칙을 따르는 자료구조는?',
    answer: ['큐', '스택', '트리'],
  },
  {
    problem_set_id: 2,
    subject: '알고리즘',
    difficulty_level: 'medium',
    question_type: '서술형',
    question: '다음 중 시간복잡도가 O(n)인 알고리즘은?',
    answer: ['버블 정렬', '선형 탐색', '퀵 정렬'],
  },
];

const problemIds = [1, 2]; // 실제로 사용할 문제 ID 목록

const Test = () => {
  const [problems, setProblems] = useState(dummyProblems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // 실제 API에서 문제를 받아오는 코드 (주석 처리)
  /*
  useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      try {
        // 여러 문제를 병렬로 요청
        const responses = await Promise.all(
          problemIds.map(id => axios.get(`/api/problems/${id}`))
        );
        setProblems(responses.map(res => res.data));
      } catch (err) {
        alert('문제 데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);
  */

  const currentProblem = problems[currentIndex];

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  if (loading) return <div className="study-wrapper"><div>로딩 중...</div></div>;
  if (!currentProblem) return null;

  return (
    <div className="study-wrapper">
      <div className="section-card">
        <h1 className="study-title">문제 풀이</h1>
        {!showResult ? (
          <div>
            <div className="quiz-header">
              <span className="difficulty-badge">{currentProblem.difficulty_level}</span>
              <span className="question-type">{currentProblem.question_type}</span>
            </div>
            <h3 className="question">{currentProblem.question}</h3>
            <div className="answer-options">
              {Array.isArray(currentProblem.answer) && currentProblem.answer.map((option, idx) => (
                <button
                  key={idx}
                  className={`answer-btn ${selectedAnswers[currentIndex] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }}>
              {currentIndex > 0 && (
                <button className="submit-btn" style={{ width: '48%' }} onClick={handlePrev}>
                  이전 문제
                </button>
              )}
              {currentIndex < problems.length - 1 && (
                <button className="submit-btn" style={{ width: currentIndex > 0 ? '48%' : '100%' }} onClick={handleNext} disabled={selectedAnswers[currentIndex] === undefined}>
                  다음 문제
                </button>
              )}
              {currentIndex === problems.length - 1 && (
                <button className="submit-btn" style={{ width: currentIndex > 0 ? '48%' : '100%' }} onClick={handleSubmit} disabled={selectedAnswers[currentIndex] === undefined}>
                  제출하기
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2>제출 완료</h2>
            <ul style={{textAlign: 'left', marginTop: '20px'}}>
              {problems.map((prob, idx) => (
                <li key={prob.problem_set_id} style={{marginBottom: '10px'}}>
                  <b>Q{idx+1}.</b> {prob.question}<br/>
                  <span>
                    내 답: {selectedAnswers[idx] || '미응답'}
                  </span>
                </li>
              ))}
            </ul>
            <button className="submit-btn" onClick={handleRestart} style={{marginTop: '24px'}}>다시 풀기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
