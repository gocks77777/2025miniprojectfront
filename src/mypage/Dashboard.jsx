import { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [weeklyStats, setWeeklyStats] = useState([]);
  const [wrongNotes, setWrongNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getColorByAccuracy = (accuracy) => {
    if (accuracy >= 80) return '#28a745';
    if (accuracy >= 60) return '#ffc107';
    return '#dc3545';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    navigate('/login');
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        console.log('✅ 더미 데이터 세팅 시작');

        // 더미 유저
        const dummyUser = { name: '홍길동' };
        setUser(dummyUser);

        // 더미 통계
        const dummyStats = [
          { date: '5월 13일', subject: '자료구조', count: 12, accuracy: 80 },
          { date: '5월 14일', subject: '운영체제', count: 10, accuracy: 60 },
          { date: '5월 15일', subject: '디지털시스템', count: 8, accuracy: 90 },
        ];
        setWeeklyStats(dummyStats);
        console.log('✅ 주간 통계:', dummyStats);

        // 더미 오답노트
        const dummyWrongNotes = [
          {
            subject: '자료구조',
            question: '스택과 큐의 차이점은?',
            answer: '스택은 LIFO, 큐는 FIFO 구조입니다.',
          },
          {
            subject: '운영체제',
            question: '프로세스와 스레드의 차이점은?',
            answer: '프로세스는 독립 메모리, 스레드는 공유 메모리를 사용합니다.',
          },
        ];
        setWrongNotes(dummyWrongNotes);
        console.log('✅ 오답 노트:', dummyWrongNotes);
      } catch (err) {
        console.warn('데이터 세팅 실패:', err);
        setError('데이터를 불러올 수 없습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="error-msg">{error}</p>;

  return (
    <div className="dashboard-wrapper">
      <h1>Quizie Hub - 학습 대시보드</h1>
      <h2>{user?.name || '사용자'}님, 안녕하세요 👋</h2>

      <div className="dashboard-buttons">
        <button className="edit-btn" onClick={() => navigate('/mypage/edit')}>
          회원정보 수정
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          로그아웃
        </button>
      </div>

      {/* 주간 학습 통계 */}
      <section className="section-card">
        <h3>📊 주간 학습 통계</h3>
        <div className="chart-area">
          {Array.isArray(weeklyStats) && weeklyStats.map((stat, i) => (
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
import './Dashboard.css';

export default function Dashboard() {
  const [user] = useState({ name: '홍길동' });

  const weeklyStats = [
    { date: '5월 13일', subject: '자료구조', count: 12, accuracy: 80 },
    { date: '5월 14일', subject: '운영체제', count: 10, accuracy: 60 },
    { date: '5월 15일', subject: '디지털시스템', count: 8, accuracy: 90 },
  ];

  const wrongNotes = [
    {
      subject: '자료구조',
      question: '스택과 큐의 차이점은?',
      answer: '스택은 LIFO, 큐는 FIFO 구조입니다.',
    },
    {
      subject: '운영체제',
      question: '프로세스와 스레드의 차이점은?',
      answer: '프로세스는 독립 메모리, 스레드는 공유 메모리를 사용합니다.',
    },
  ];

  const getColorByAccuracy = (accuracy) => {
    if (accuracy >= 80) return '#28a745'; // 초록
    if (accuracy >= 60) return '#ffc107'; // 주황
    return '#dc3545'; // 빨강
  };

  return (
    <div className="dashboard-wrapper">
      <h1>Quizie Hub - 학습 대시보드</h1>
      <h2>{user.name}님, 안녕하세요 👋</h2>

      {/* 📊 주간 학습 통계 */}
      <section className="section-card">
        <h3>📊 주간 학습 통계</h3>
        <div className="chart-area">
          {weeklyStats.map((stat, i) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
            <div key={i} className="chart-bar">
              <span>{stat.date}</span>
              <div
                className="bar"
                style={{
                  height: `${stat.count * 10}px`,
                  backgroundColor: getColorByAccuracy(stat.accuracy),
                }}
              >
                {stat.count}문제
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div
                className="accuracy"
                style={{ color: getColorByAccuracy(stat.accuracy) }}
              >
=======
              <div className="accuracy" style={{ color: getColorByAccuracy(stat.accuracy) }}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
              <div className="accuracy" style={{ color: getColorByAccuracy(stat.accuracy) }}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
              <div className="accuracy" style={{ color: getColorByAccuracy(stat.accuracy) }}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
                {stat.accuracy}%
              </div>
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* 학습 히스토리 */}
=======
      {/* 📅 학습 히스토리 */}
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
      {/* 📅 학습 히스토리 */}
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
      {/* 📅 학습 히스토리 */}
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
      <section className="section-card">
        <h3>📅 학습 히스토리</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>날짜</th>
              <th>과목</th>
              <th>문제 수</th>
              <th>정답률</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {Array.isArray(weeklyStats) && weeklyStats.map((stat, i) => (
=======
            {weeklyStats.map((stat, i) => (
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
            {weeklyStats.map((stat, i) => (
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
            {weeklyStats.map((stat, i) => (
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
              <tr key={i}>
                <td>{stat.date}</td>
                <td>{stat.subject}</td>
                <td>{stat.count}</td>
                <td style={{ color: getColorByAccuracy(stat.accuracy) }}>
                  {stat.accuracy}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* 오답 노트 */}
      <section className="section-card">
        <h3>❌ 오답 노트</h3>
        <div className="wrong-note-list">
          {Array.isArray(wrongNotes) && wrongNotes.map((note, i) => (
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
      {/* ❌ 오답 노트 */}
      <section className="section-card">
        <h3>❌ 오답 노트</h3>
        <div className="wrong-note-list">
          {wrongNotes.map((note, i) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
            <div className="note-card" key={i}>
              <strong>{note.subject}</strong>
              <p><b>문제:</b> {note.question}</p>
              <p><b>정답:</b> {note.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
