import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './pages/user/Login';
import { SignUp } from './pages/user/SignUp';
import { ToDoList } from './pages/todos/ToDoList';

function App() {
  return (
    <Routes>

      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/todolist' element={<ToDoList />} />

    </Routes>
  );
};

export default App;
