import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import Signup from './User/Signup';
import Dashboard from './Mypage/Dashboard';
import EditInfo from './Mypage/EditInfo';
import Study from './Study/test';
import FileUpload from './AI/fileUpload';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  console.log('앱 렌더링');

  return (
    <BrowserRouter>
      <Routes>
        {/* 공개 페이지 */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 보호된 페이지 */}
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

        {/* 테스트용 공개 페이지들 */}
        <Route path="/study" element={<Study />} />
        <Route path="/fileupload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
