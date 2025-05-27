import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Test = () => {
    const [problems, setProblems] = useState([]);
    const [currentSubject, setCurrentSubject] = useState('알고리즘');
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // 여러 문제 ID에 대한 데이터를 가져오기
                const problemIds = [1, 2]; // 예시로 1, 2번 문제를 가져옴
                const problemPromises = problemIds.map(id => 
                    axios.get(`/api/problems/${id}`)
                );
                
                const responses = await Promise.all(problemPromises);
                const problemsData = responses.map(response => response.data);
                
                setProblems(problemsData);
            } catch (err) {
                setError('문제를 불러오는데 실패했습니다.');
                console.error('Error fetching problems:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, []);

    const handleAnswerSelect = (problemId, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [problemId]: answer
        }));
    };

    const handleSubmit = async () => {
        try {
            // 답안 제출 로직
            const response = await axios.post('/api/problems/submit', {
                answers: selectedAnswers
            });
            console.log('Submit response:', response.data);
            // 성공 메시지 표시 또는 다음 단계로 이동
        } catch (err) {
            console.error('Error submitting answers:', err);
            alert('답안 제출에 실패했습니다.');
        }
    };

    if (loading) {
        return (
            <div className="dashboard-bg">
                <main className="main">
                    <div className="container">
                        <div className="loading">문제를 불러오는 중...</div>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-bg">
                <main className="main">
                    <div className="container">
                        <div className="error-message">{error}</div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="dashboard-bg">
            <main className="main">
                <div className="container">
                    <div className="header-row">
                        <h1 className="title">Study Dashboard</h1>
                        <div className="date-container">
                            <span className="date">{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>

                    <div className="section subjects-section">
                        <div className="section-label">Subjects</div>
                        <div className="subject-slider-container">
                            <button className="slider-nav-btn prev-btn">❮</button>
                            <div className="subject-selector">
                                <button 
                                    className={`subject-btn ${currentSubject === '알고리즘' ? 'active' : ''}`}
                                    onClick={() => setCurrentSubject('알고리즘')}
                                >
                                    알고리즘
                                </button>
                                {/* 다른 과목 버튼들 추가 가능 */}
                            </div>
                            <button className="slider-nav-btn next-btn">❯</button>
                        </div>
                    </div>

                    <div className="section card">
                        <div className="section-label bold">문제 풀이</div>
                        <div className="quiz-list">
                            {problems.map((problem) => (
                                <div key={problem.problem_set_id} className="quiz-card">
                                    <div className="quiz-header">
                                        <span className="difficulty-badge">{problem.difficulty_level}</span>
                                        <span className="question-type">{problem.question_type}</span>
                                    </div>
                                    <h3 className="question">{problem.question}</h3>
                                    <div className="answer-options">
                                        {problem.answer.map((option, index) => (
                                            <button
                                                key={index}
                                                className={`answer-btn ${selectedAnswers[problem.problem_set_id] === option ? 'selected' : ''}`}
                                                onClick={() => handleAnswerSelect(problem.problem_set_id, option)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="submit-btn" onClick={handleSubmit}>
                        제출하기
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Test;
