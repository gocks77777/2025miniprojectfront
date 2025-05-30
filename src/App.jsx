import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './user/Login';
import Signup from './user/Signup';
import Dashboard from './mypage/Dashboard';
import EditInfo from './mypage/EditInfo';
import Study from './study/test';
import FileUpload from './AI/fileUpload';

export default function App() {
  console.log("앱 렌더링");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Dashboard />} />
        <Route path="/mypage/edit" element={<EditInfo />} />
        <Route path="/study" element={<Study />} />
        <Route path="/fileupload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

