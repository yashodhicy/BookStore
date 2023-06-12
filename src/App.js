import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Categories';
import Books from './Books';

function App() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h1 className="title"> </h1>
          <ul className="nav-menu">
            <li><Link to="/">BOOKS</Link></li>
            <li><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </nav>
        <button type="button">Account</button>
      </header>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
