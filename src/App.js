import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { IoIosPerson } from 'react-icons/io';
import Categories from './Categories';
import Books from './Books';

function App() {
  return (
    <div className="body">
      <header className="header">
        <nav className="navbar">
          <h1 className="main-title">Bookstore CMS</h1>
          <ul className="nav-menu">
            <li id="books"><Link to="/">BOOKS</Link></li>
            <li id="categories"><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </nav>
        <button type="button" aria-label="User Profile" className="profile">
          <IoIosPerson className="icon-color" />
        </button>
      </header>

      <Routes className="routes">
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
