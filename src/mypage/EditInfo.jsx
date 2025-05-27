import { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
//import './EditInfo.css';

export default function EditInfo() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
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
      alert('정보 수정에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
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
    }
  };

  return (
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
    </div>
  );
}
