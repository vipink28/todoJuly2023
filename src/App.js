
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/task-list' element={<TaskList />}></Route>
        <Route path='/create-task' element={<CreateTask />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>      
    </BrowserRouter>   
  );
}

export default App;
