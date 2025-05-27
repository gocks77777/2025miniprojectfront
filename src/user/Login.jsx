import { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance'; // ✅ 본인 경로에 맞게 수정!
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
import axios from 'axios';
>>>>>>> refs/remotes/origin/feature/AI
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
      const res = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/mypage';
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('이메일 또는 비밀번호가 올바르지 않습니다.');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
          <button type="submit">로그인</button>
        </form>
        <p className="signup-link">
          계정이 없으신가요? <a href="/signup">회원가입</a>
        </p>
      </div>
    </div>
  );
}
