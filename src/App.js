import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './pages/user/Login';
import { SignUp } from './pages/user/SignUp';
import { Todos } from './pages/todos/Todos';

function App() {

  return (
    <Routes>

      {/* 기본 경로인 '/'을 '/signin'으로 리다이렉트합니다. */}
      <Route path='/' element={<Navigate to='/signin' />} />

      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/todo' element={<Todos />} />

    </Routes>
  );
};

export default App;
