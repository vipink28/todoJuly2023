
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
          <Route path='/create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}></Route>
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;



//request - get, put, post, patch, delete
//endpoint - http://localhost:5000/users

// {method: "GET"} - http://localhost:5000/users - will return an array of all users.

// {method: "GET"} - http://localhost:5000/users/2 - will return single user matching the id.

// {method: "POST"} - http://localhost:5000/users - will create a new record in database.

// {method: "PUT"} - http://localhost:5000/users/2 - will update the item with new values.

// {method: "PATCH"} - http://localhost:5000/users/2 - will update only the modified value.

// {method: "DELETE"} - http://localhost:5000/users/2 - item will be deleted.

// filter 
// {method: "GET"} - http://localhost:5000/users?name="vipin&password="abc" - will return a new array with objects matched with filter query.