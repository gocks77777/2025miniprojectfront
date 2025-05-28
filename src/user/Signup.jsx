import { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
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
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    try {
      await axios.post('/api/users/register', { name, email, password });
      alert('회원가입 성공! 로그인 해주세요.');
      window.location.href = '/login';
    } catch (error) {
      console.error('회원가입 실패:', error);
<<<<<<< HEAD
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
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="logo">Quizie Hub</div>
        <form onSubmit={handleSignup} className="signup-form">
=======
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
>>>>>>> refs/remotes/origin/feature/AI
=======
        <h1 className="logo">Quizie Hub</h1>
        <form className="signup-form" onSubmit={handleSignup}>
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
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
