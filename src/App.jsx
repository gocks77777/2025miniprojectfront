import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import Signup from './User/Signup';
import Dashboard from './Mypage/Dashboard';
import EditInfo from './Mypage/EditInfo';
import PrivateRoute from './routes/PrivateRoute'; // 반드시 생성 필요!

export default function App() {
  console.log('앱 렌더링');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 👇 로그인한 사용자만 접근 가능한 페이지들 */}
        <Route
          path="/mypage"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/edit"
          element={
            <PrivateRoute>
              <EditInfo />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}