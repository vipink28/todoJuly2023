
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