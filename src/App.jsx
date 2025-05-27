import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './User/Login';
import Signup from './User/Signup';
import Dashboard from './Mypage/Dashboard';
import EditInfo from './Mypage/EditInfo';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Study from './Study/test';
import FileUpload from './AI/fileUpload';
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/study" element={<Study />} />
        <Route path="/fileupload" element={<FileUpload />} />
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
      </Routes>
    </BrowserRouter>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> 6e67a1c374769feb343e8fb9c044e50826654ec7
=======
>>>>>>> refs/remotes/origin/feature/AI
