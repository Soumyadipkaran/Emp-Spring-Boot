import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from "./pages/header/Header"
import NoMatch from './pages/Error/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/updateUser';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/employee" element={<PostUser/>} />
      <Route path='/employee/:id' element={<UpdateUser/>} />
      <Route path="*" element={<NoMatch/>} />
    </Routes>
    </>
  );
}

export default App;
