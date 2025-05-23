import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import Signup from './User/Signup';
import Dashboard from './Mypage/Dashboard';
import EditInfo from './Mypage/EditInfo';

export default function App() {
  console.log("앱 렌더링");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/mypage/edit" element={<EditInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
