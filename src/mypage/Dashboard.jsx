import { useEffect, useState } from 'react';
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
              <div className="accuracy" style={{ color: getColorByAccuracy(stat.accuracy) }}>
                {stat.accuracy}%
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📅 학습 히스토리 */}
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
            {weeklyStats.map((stat, i) => (
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

      {/* ❌ 오답 노트 */}
      <section className="section-card">
        <h3>❌ 오답 노트</h3>
        <div className="wrong-note-list">
          {wrongNotes.map((note, i) => (
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
