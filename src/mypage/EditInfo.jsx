import { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
//import './EditInfo.css';
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
import axios from 'axios';
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7

export default function EditInfo() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleUpdate = async () => {
    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await axios.put('/users/profile', {
        name,
        password,
      });

      console.log('✅ 정보 수정 성공:', res.data);
      alert('정보가 수정되었습니다.');
      navigate('/mypage');
    } catch (error) {
      console.error('❌ 정보 수정 실패:', error.response?.data || error.message);
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7

  const handleUpdate = async () => {
    if (password !== confirm) return alert('비밀번호가 일치하지 않습니다.');
    try {
      const token = localStorage.getItem('token');
      await axios.put('/api/users/profile', { name, password }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('정보가 수정되었습니다.');
    } catch (error) {
      console.error('정보 수정 실패:', error);
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
      alert('정보 수정에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const confirmDelete = window.confirm('정말로 회원탈퇴하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await axios.delete('/users/profile');
      localStorage.removeItem('token');
      alert('회원탈퇴가 완료되었습니다.');
      navigate('/signup');
    } catch (error) {
      console.error('❌ 회원탈퇴 실패:', error.response?.data || error.message);
      alert('회원탈퇴에 실패했습니다.');
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
    const token = localStorage.getItem('token');
    try {
      await axios.delete('/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.removeItem('token');
      alert('회원탈퇴 완료');
      window.location.href = '/signup';
    } catch (error) {
      console.error('회원탈퇴 실패:', error);
      alert('회원탈퇴 실패: 비밀번호가 틀렸을 수 있습니다.');
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="edit-wrapper">
      <div className="edit-container">
        <h1>회원정보 수정</h1>
        <input
          type="text"
          placeholder="새 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="새 비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button className="edit-button" onClick={handleUpdate}>
          정보 수정
        </button>
        <button className="delete-button" onClick={handleDelete}>
          회원 탈퇴
        </button>
      </div>
=======
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
    <div className="container">
      <h1>회원정보 수정</h1>
      <input type="text" placeholder="이름 변경" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="새 비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="비밀번호 확인" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button onClick={handleUpdate}>정보 수정</button>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>회원 탈퇴</button>
<<<<<<< HEAD
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
    </div>
  );
}
