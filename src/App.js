import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Adduser from './components/users/Adduser';
import EditUser from './components/users/EditUser';
import View from './components/users/View';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<Adduser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
