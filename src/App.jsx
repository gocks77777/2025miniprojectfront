import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import Signup from './User/Signup';
import Dashboard from './Mypage/Dashboard';
import EditInfo from './Mypage/EditInfo';
import Study from './Study/test';
import FileUpload from './AI/fileUpload';

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
        <Route path="/study" element={<Study />} />
        <Route path="/fileupload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}