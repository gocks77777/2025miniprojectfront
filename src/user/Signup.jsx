import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance'; // ✔️ 실제 API 인스턴스 경로
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await axios.post('/users/register', {
        name,
        email,
        password,
      });

      console.log('✅ 회원가입 성공:', res.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.error('❌ 회원가입 실패:', error.response?.data || error.message);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">회원가입</button>
        </form>
        <p className="login-link">
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </p>
      </div>
    </div>
  );
}
