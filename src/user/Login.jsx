import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance'; // ✅ 본인 경로에 맞게 수정!
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', {
        email,
        password,
      });

      const { token, user } = res.data; // ✅ 응답에서 토큰, 유저 정보 분리

      localStorage.setItem('token', token); // ✅ 토큰 저장
      localStorage.setItem('user', JSON.stringify(user)); // 선택: 유저 정보 저장

      alert('로그인 성공!');
      navigate('/mypage'); // 로그인 후 마이페이지 이동
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMsg('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <h1 className="logo">Quizie Hub</h1>
        <form className="login-form" onSubmit={handleLogin}>
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
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
          <button type="submit">로그인</button>
        </form>
        <p className="signup-link">
          계정이 없으신가요? <a href="/signup">회원가입</a>
        </p>
      </div>
    </div>
  );
}
