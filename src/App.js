import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ToDoList } from './pages/ToDoList';

function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todolist' element={<ToDoList />} />

      </Routes>


    </div>
  );
}

export default App;
