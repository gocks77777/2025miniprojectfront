import { useState } from 'react';
import axios from 'axios';

export default function EditInfo() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

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
      alert('정보 수정에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
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
    }
  };

  return (
    <div className="container">
      <h1>회원정보 수정</h1>
      <input type="text" placeholder="이름 변경" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="새 비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="비밀번호 확인" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button onClick={handleUpdate}>정보 수정</button>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>회원 탈퇴</button>
    </div>
  );
}
